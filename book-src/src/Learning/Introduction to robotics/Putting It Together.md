## The Full Picture

You've now met every piece separately: PID keeps the bot centered on a straight stretch of line, and LSRB/RSLB decides which way to go at a junction. This page puts both together into one piece of pseudocode, the actual shape of the logic your bot will run, over and over, forever.

Everything starts from the same five IR sensor readings, S0 (far left) through S4 (far right), each either 1 (sees the line) or 0 (doesn't).

## Step 1: Calculate the Error

PID needs a single number describing how far off-center the line is. The common trick is a **weighted average**: give each sensor a position weight, centered on zero, and average the weights of whichever sensors currently see the line.

```
weights = [-2, -1, 0, 1, 2]     // S0 .. S4, negative = left of center

read S0, S1, S2, S3, S4
sensors = [S0, S1, S2, S3, S4]

sum = 0
count = 0
for i in 0..4:
    if sensors[i] == 1:
        sum = sum + weights[i]
        count = count + 1

if count > 0:
    error = sum / count         // negative = line is to the left, positive = to the right
else:
    error = previous_error      // no sensor sees the line, assume it kept drifting the same way
```

## Step 2: Classify the Junction

At the same time, the same five readings tell you whether you're on a plain stretch of line or sitting at a junction, using the sensor patterns from the [LSRB / RSLB](LSRB%20RSLB.md) page.

```
if S0 == 0 and S1 == 0 and S2 == 0 and S3 == 0 and S4 == 0:
    junction = DEAD_END

else if S0 == 1 and S4 == 1:
    junction = CROSS_OR_T

else if S0 == 1 and S1 == 0 and S2 == 0 and S3 == 0 and S4 == 0:
    junction = SHARP_LEFT

else if S4 == 1 and S0 == 0 and S1 == 0 and S2 == 0 and S3 == 0:
    junction = SHARP_RIGHT

else if S0 == 1:
    junction = LEFT_TURN

else if S4 == 1:
    junction = RIGHT_TURN

else:
    junction = STRAIGHT
```

## Don't Guess, Double-Check

Here's a catch: two sensor patterns can look identical for a split second before the real answer reveals itself.

If every sensor suddenly reads 0, is that really a dead end, or just a tiny gap in the line right before a cross junction's center? If only the far-left sensor sees the line, is that a sharp turn, or just the very first moment of a T-junction, before the bot has rolled forward enough for the straight path to come into view?

You wouldn't trust a single glance to tell the two apart, you'd take a step closer and look again. Your bot should do exactly the same thing: before trusting a `DEAD_END`, `SHARP_LEFT`, or `SHARP_RIGHT` reading, creep forward a small, fixed distance and check the sensors one more time.

```
if junction == DEAD_END or junction == SHARP_LEFT or junction == SHARP_RIGHT:
    move forward a small fixed distance
    read S0, S1, S2, S3, S4 again
    classify junction again using this new reading     // Step 2, repeated

// only now is the junction type trustworthy enough to act on
```

Skip this check, and your bot will spin around in confusion every time the line so much as flickers. One extra look is the difference between a bot that confidently solves the maze and one that doesn't.

## Step 3: Decide What To Do

`STRAIGHT` (and the gradual `LEFT_TURN` / `RIGHT_TURN` cases) are PID's job, small corrections, every cycle. Everything else, a real junction or a dead end, needs a one-off LSRB/RSLB decision instead.

```
if junction == STRAIGHT or junction == LEFT_TURN or junction == RIGHT_TURN:
    correction = Kp * error + Ki * integral + Kd * (error - previous_error)
    integral = integral + error
    previous_error = error

    leftMotorSpeed  = baseSpeed - correction
    rightMotorSpeed = baseSpeed + correction

else:
    // a junction or dead end: let LSRB (or RSLB) pick a direction
    if junction != DEAD_END and left is open:
        direction = LEFT
    else if junction != DEAD_END and straight is open:
        direction = STRAIGHT
    else if junction != DEAD_END and right is open:
        direction = RIGHT
    else:
        direction = BACK

    turn(direction)              // keep turning until the middle sensor finds the line again

    integral = 0                 // reset PID state, the old error no longer means anything
    previous_error = 0
```

## Step 4: Loop Forever

```
loop forever:
    calculate error               // Step 1
    classify junction             // Step 2
    double-check if unsure        // Don't Guess, Double-Check
    decide and act                // Step 3
```

That's the whole algorithm, every decision your bot makes, from the gentlest wobble to a full maze turn, comes from running these same steps again and again.
