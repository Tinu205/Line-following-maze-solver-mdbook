## MOTORS

A motor is what turns electrical energy into physical motion, it's the "muscle" of a robot. Going back to the Sense-Think-Act paradigm, motors are how a robot actually **Acts**: once the controller has decided what to do, motors are what carry that decision out in the real world.

## Types of Motors

### DC Motors (Brushed)

- The simplest and cheapest kind of motor, and the most common one in beginner robotics kits.
- Spins continuously in one direction as long as power is applied, reverse the polarity of the voltage and it spins the other way.
- Inside, physical contacts called "brushes" keep switching the current's direction as the motor spins, which is simple but wears out over time and makes the motor a bit noisy and less efficient.

### Brushless DC Motors (BLDC)

- Does the same job as a brushed DC motor, but replaces the physical brushes with electronic switching, done by a controller chip instead of physical contact.
- More efficient, quieter, and lasts far longer than a brushed motor, since there's nothing physically rubbing together to wear out.
- The tradeoff is complexity: a BLDC motor can't just be wired straight to a battery, it needs a dedicated **ESC (Electronic Speed Controller)** to handle the precise switching. You'll typically find these in drones and high-performance RC vehicles.

### Servo Motors

- Built for precise **position** control rather than continuous spinning, you tell it "go to 90 degrees," and it goes there and holds.
- Has built-in gearing and a feedback mechanism inside, so it constantly checks its own position and corrects itself.
- Great for tasks like steering, gripping, or any place you need to point something at an exact angle rather than just spin it.

### Stepper Motors

- Moves in small, fixed increments, "steps", rather than spinning smoothly, and can be commanded to move an exact number of steps.
- Doesn't need a feedback sensor to know its position, it inherently knows because it only ever moves in these fixed steps.
- Common in 3D printers and CNC machines, anywhere you need very precise, repeatable movement.

## Why Motors Need a Driver

Here's the catch with all of the above: a microcontroller pin can only safely supply a tiny amount of current, nowhere near enough to spin most motors, which can demand several hundred milliamps or more. Plug a motor straight into a pin and, best case, nothing happens; worst case, you damage the pin.

That's the job of a **motor driver**, a circuit that sits between the microcontroller and the motor, taking a small, safe signal from the microcontroller and using it to switch a much larger current from a separate power source to the motor. For brushless motors specifically, that driver is the ESC mentioned above; for brushed DC motors, a chip like the L293D usually does the job.

We'll get hands-on with exactly how that works, direction control, H-bridges, and the L293D, on the next page.

## Quick reference

| Motor type | Key trait | Common use |
| --- | --- | --- |
| DC (Brushed) | simple, cheap, wears out over time | basic robots |
| Brushless (BLDC) | efficient, quiet, needs an ESC | drones |
| Servo | precise angle control, holds position | steering, grippers |
| Stepper | precise, repeatable steps, no feedback needed | 3D printers, CNC |
