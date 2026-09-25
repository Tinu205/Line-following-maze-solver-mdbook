## From Bang-Bang to Something Smoother

The Bang-Bang controller from the last page works, but it has an obvious flaw: it only ever knows two states, full power ON or completely OFF. It never asks *how far off* you are, only *which side*.

*Question:* Picture your line-following bot drifting a little bit off the line versus drifting a lot off the line. With a Bang-Bang controller, both cases get exactly the same correction, a full turn one way or the other. Does that sound right to you?

That's the wobble you'll actually see if you try Bang-Bang on a real line follower: it lurches hard left, overshoots the line, lurches hard right, overshoots again. It's always over-correcting, because it never knew *how much* to correct by in the first place.

## The P (Proportional) Controller

The fix is simple to say: **make the correction proportional to how wrong you are.** A small drift gets a small nudge. A big drift gets a big correction. This is called a **P controller**, P for Proportional.

We start by defining **error**, the difference between where you want to be and where you actually are:

```
error = target - current
```

For a line follower, `target` is "the line is exactly centered under my sensors," and `current` is how far the line actually is from center. The P controller turns that error straight into a correction:

```
correction = Kp * error
```

`Kp` is a number you choose yourself, called the **proportional gain**. It controls how aggressively the bot reacts, turn `Kp` up and small drifts cause big corrections; turn it down and the bot barely reacts at all.

*Question:* What do you think happens if `Kp` is set too high?

If `Kp` is too large, even a tiny error produces a huge correction, and the bot swings past the line, then swings back past it the other way. That's **overshoot**, and if it keeps happening every cycle, you get oscillation again, smoother than Bang-Bang's wobble, but still a wobble. Set `Kp` too low, and the bot barely notices it's drifting, and takes forever to correct.

## Adding D: Damping the Wobble

Even with a carefully tuned `Kp`, a plain P controller tends to overshoot the target, correct back, overshoot again, each swing a little smaller, until it finally settles. That happens because P only ever looks at the error *right now* — it has no idea whether that error is growing or shrinking, so it can't tell "I'm about to reach the line, ease up" from "I'm still far away, keep going."

That's what the **D (Derivative)** term is for. It looks at how fast the error is changing:

```
correction = Kp * error + Kd * (change in error)
```

If the error is shrinking quickly, the D term pulls back on the correction, acting like a brake as you approach the target and cutting down on overshoot. Think of the difference between slamming the brakes only once you're already at the red light, versus easing off the accelerator as you see it coming up ahead.

## Adding I: Erasing the Leftover Error

There's one more problem P and D together still don't solve: sometimes a small, steady error refuses to go away, called **steady-state error**. Maybe a bit of friction or a slight mechanical misalignment keeps nudging the bot a little off-center, and the error is too small for P to bother correcting.

The **I (Integral)** term fixes this by keeping a running total of the error over time:

```
correction = Kp * error + Ki * (running total of error) + Kd * (change in error)
```

Even a tiny error, if it hangs around long enough, keeps adding up in that running total until the I term forces a correction big enough to finally erase it.

## PID: All Three Together

Put P, I, and D together and you get a **PID controller**, one of the most widely used control algorithms in the world, running everything from thermostats and cruise control to the line-following bot you're about to build.

| Term | Reacts to | Fixes |
| --- | --- | --- |
| P (Proportional) | how wrong you are right now | the basic correction |
| I (Integral) | how long you've been wrong | small errors that never go away |
| D (Derivative) | how fast the error is changing | overshoot and oscillation |

Tuning a PID controller means finding the right `Kp`, `Ki`, and `Kd` for your specific bot. Too much of any one term and you get a different flavour of instability; too little and the bot barely reacts at all. You'll get hands-on with exactly this tuning in the upcoming tasks.
