## The Full Picture

You've now met every piece separately: PID keeps the bot centered on a straight stretch of line, and LSRB decides which way to go at a junction. This page puts both together into one piece of pseudocode, the actual shape of the logic your bot will run, over and over, until it finishes the maze.

*Pseudocode* means "code written for humans". It isn't real Arduino code, but it shows the steps clearly so you can turn it into real code later.

Everything starts from the same five IR sensor readings, S0 (far left) through S4 (far right), each either 1 (sees the black line) or 0 (sees white floor).

## One Sign Rule For Everything

To keep the maths simple, we use the same rule on this page and on the [PID controller](PID%20controller.md) page:

- **Negative means left, positive means right.**
- If the line is to the **right** of the bot's center, `error` is **positive**.
- To go back to the line, the bot must turn **toward** it. So when `error` is positive, the **left motor speeds up** and the **right motor slows down** (the bot curves right).

## Step 1: Calculate the Error

PID needs a single number saying how far off-center the line is. The trick is a **weighted average**: give each sensor a position number (its weight), centered on zero, then average the weights of the sensors that see the line.

```
weights = [-2, -1, 0, 1, 2]     // S0 .. S4, negative = left of center

sum = 0
count = 0
for i in 0..4:
    if sensors[i] == 1:
        sum = sum + weights[i]
        count = count + 1

if count > 0:
    position = sum / count      // where the line is: -2 (far left) .. +2 (far right)
else:
    position = 0                // no line seen: handled in Step 2

error = position - 0            // target is 0 = line exactly in the middle
                                // positive error = line is to the RIGHT
```

Example: only S3 sees the line. `position = 1`, so `error = 1`. The line is a bit to the right.

## Step 2: Is This A Junction?

On a plain line, the middle sensors see black and the outer sensors see white. Two things tell us something special is happening:

- **S0 sees black**: there is a path opening to the **left**.
- **S4 sees black**: there is a path opening to the **right**.
- **No sensor sees the line**: a dead end, or maybe just a tiny gap.

But the sensors only look at the floor right under them. They can't see if a path continues **straight** ahead beyond the junction. So the bot does what you would do: it takes a small step forward and looks again.

```
if S0 == 1 or S4 == 1 or count == 0:        // something special here

    left_open  = (S0 == 1)                  // remember these BEFORE moving
    right_open = (S4 == 1)

    move forward a small fixed distance     // creep forward a little
    read all five sensors again

    if all five sensors == 1:
        stop the motors                     // a solid black square: END OF MAZE!

    straight_open = (S1 == 1 or S2 == 1 or S3 == 1)

    decide_and_turn(left_open, straight_open, right_open)   // Step 3
```

Why creep forward? A **cross** (`+`) and a **T** look the same at first glance. Only after rolling forward can the bot learn whether the line carries on straight. The same trick fixes a tiny gap in the line: after creeping, the line shows up again, `straight_open` is true, and the bot just carries on.

The "all five black" check also happens after creeping, so a cross is not mistaken for the finish square. A cross has white floor in the corners, a solid square does not.

## Step 3: Decide With LSRB

Now apply the rule from the [LSRB / RSLB](LSRB%20RSLB.md) page: **Left first, then Straight, then Right, otherwise Back.**

```
function decide_and_turn(left_open, straight_open, right_open):
    if left_open:
        turn(LEFT)
    else if straight_open:
        // keep going, PID will drive the bot onward
    else if right_open:
        turn(RIGHT)
    else:
        turn(BACK)
```

So a straight path with a side branch to the left? The bot takes the **left**, because Left comes first. That is exactly what LSRB means.

## Step 4: Turning Without Losing The Line

During a turn, the sensors leave the old line and must find the new one. The bot should not give up halfway, so `turn()` has two phases:

```
function turn(direction):
    start spinning in place toward direction    // left motor back + right forward for LEFT, etc.

    while sensor S2 sees the line:              // phase 1: leave the old line
        keep spinning

    while sensor S2 does not see the line:      // phase 2: find a line again
        keep spinning

    stop spinning
    integral = 0                                // old errors mean nothing now
    previous_error = 0
```

Without phase 1, the middle sensor would still be sitting on the old line and the bot would think the turn was already done. For `BACK` (a U-turn), the same two phases work: the bot spins until it finds the line behind it.

## Step 5: Follow The Line With PID

When there is no junction, PID does the steering, every cycle:

```
correction = Kp * error + Ki * integral + Kd * (error - previous_error)

integral = integral + error
integral = constrain(integral, -100, 100)   // limit it, see the note below
previous_error = error

leftMotorSpeed  = baseSpeed + correction    // line on the right (error > 0): left speeds up
rightMotorSpeed = baseSpeed - correction    //                                right slows down

leftMotorSpeed  = constrain(leftMotorSpeed,  0, 255)    // PWM only accepts 0 to 255
rightMotorSpeed = constrain(rightMotorSpeed, 0, 255)
```

Check it with numbers: `baseSpeed = 150`, `Kp = 10`, `error = 2` (line far right). `correction = 20`, so left = 170 and right = 130. The left wheel is faster, so the bot curves right, toward the line. 

`constrain(x, 0, 255)` means "if x is below 0 use 0, if above 255 use 255". Without it, a big correction could give a speed like 300 or -40, which the motor driver can't use.

**A word about the integral:** the `I` term keeps adding up error. If the bot is stuck off the line for a while, the total can grow huge (this is called *integral windup*) and the bot will then overreact. That's why we limit it with `constrain`, and why most line followers use a tiny `Ki`, or even `Ki = 0` (so it is simply PD control). Start with `Ki = 0`.

## Step 6: Loop Until The End

```
loop forever:
    read sensors
    calculate error                          // Step 1
    if junction or dead end or gap:          // Step 2
        creep, look again, check for the end square
        decide with LSRB and turn            // Steps 3 and 4
    else:
        steer with PID                       // Step 5
```

That's the whole algorithm. The gentlest wobble correction and a full maze turn both come from running these same steps again and again. When the bot sees the solid black square, it stops: maze solved!
