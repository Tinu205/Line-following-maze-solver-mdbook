Hello young wanderers we're now soo close to simulate things online, but before rushing towards simulation there's an important topic to cover *Analog and digital signals*

So what are these analog and digital signals ??

When we humans want to communicate with fellow humans we use different methods like sound, signs, expressions etc likewise when two microcontrollers, or a sensor and micro controllers want to communicate between each other they use two types of signals they are either analog or digital. Now let's dive deep into analog and digital signals.

## Analog signals
Analog signals are also called continuous signals, they can take any value within a range, not just fixed steps. Think of a car's speedometer: the needle doesn't jump from 20 km/h straight to 21 km/h, it sweeps smoothly through every value in between, 20.1, 20.5, 20.9, and so on. Time works the same way, and so does the volume knob on a speaker, or the brightness of the sky as the sun rises.


## Digital signals

Digital signals, on the other hand, only ever sit at a small number of fixed levels — for a microcontroller like the Arduino, usually just two: **HIGH** and **LOW** (also written as 1 and 0). There's nothing in between; a pin is either close to 5V (HIGH) or close to 0V (LOW), the same way a light switch is either on or off, never "a little bit on."

A push button is a natural digital device: pressed or not pressed, nothing in between. That's also why digital signals are so reliable , a tiny bit of electrical noise on the wire might nudge a voltage from 4.8V to 4.6V, but it's still unmistakably HIGH, so the message never gets garbled. This is exactly why computers, and the "thinking" part of your microcontroller, do all their internal work in digital: two clean states are much harder to misread than a continuous range of values.

## Why this matters for your bot

Your bot will use both, for different jobs:

- **Naturally digital:** a push button, a switch, an LED you're just turning on or off.
- **Naturally analog:** an LDR, an IR sensor's raw output, a potentiometer's position.

Here's the catch — your microcontroller's brain only really understands digital signals. So how does it read something analog, like a sensor's smoothly-changing voltage? It uses a small built-in translator called an **ADC (Analog-to-Digital Converter)**, which chops that continuous voltage into a digital number it can work with. We'll open that up properly in the ADC page coming up. And when the bot needs to send out something analog-*like*, such as a dimmed LED or a motor running at half-speed, it fakes it using a trick called **PWM** — more on that soon too.

## Quick reference

| Concept | Values it can take | Real-life analogy |
| --- | --- | --- |
| Analog | any value in a continuous range | a volume knob, a speedometer |
| Digital | a fixed number of levels (usually just HIGH/LOW) | a light switch, a push button |

**Next up:** [LED](LED.md)