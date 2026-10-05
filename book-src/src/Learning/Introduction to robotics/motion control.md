## Motion Control: Differential Drive

In simple words, when a robot has two wheels, each driven by its own motor, and the two motors can be driven separately, we call it a **differential-drive robot**. Our line follower is one.

By changing the speed of each wheel, we change the path the robot takes. (To learn how a single motor is wired and driven, see [Motors and Motor Drivers](Motors%20and%20Motor%20Drivers.md).)

Here are the various paths that a robot can follow.

<div style="text-align:center;">
    <img src="../../Assets/Images/Motion control trajectories.jpg" width="500">
</div>

## How to Move

| Movement | Left wheel | Right wheel | Result |
| --- | --- | --- | --- |
| Forward | forward | forward (same speed) | straight line |
| Backward | backward | backward | straight back |
| Gentle turn left (soft left) | slower | faster | curves left |
| Gentle turn right (soft right) | faster | slower | curves right |
| Pivot left | backward | forward | spins left on the spot |
| Pivot right | forward | backward | spins right on the spot |
| Stop | stopped | stopped | no movement |

- **Speed** of each wheel is set with PWM (`analogWrite`, 0 to 255). Equal speeds go straight; the bigger the *difference* in speeds, the sharper the curve.
- **Direction** of each wheel is set with the driver's direction pins (the truth table is on the [Motors and Motor Drivers](Motors%20and%20Motor%20Drivers.md) page).

This is exactly how PID steers the line follower: it slows one wheel and speeds up the other by a small amount, over and over. At a junction, the bot uses a **pivot** to turn on the spot.
