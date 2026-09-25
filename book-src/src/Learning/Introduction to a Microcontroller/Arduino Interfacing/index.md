# Getting Around Wokwi

Before we start wiring anything up, let's get comfortable with the tool we'll be using: [Wokwi](https://wokwi.com/). It's a simulator that runs entirely in your browser — no software to install, and since there's no real Arduino involved, there's nothing to accidentally fry while you're learning.

## Starting a new project

Open [wokwi.com/projects/new/arduino-nano](https://wokwi.com/projects/new/arduino-nano) and it'll drop you straight into a blank Arduino Nano project. You'll see three main areas:

- **The circuit area** (left/centre) — this is your virtual breadboard. Components you add show up here, and you wire them together by clicking and dragging between their pins.
- **The code editor** (right) — this is where you write the same C++ code you've already been practicing, just now talking to pins instead of just `cout`.
- **The green ▶ Play button** (top) — click it to start the simulation. Your code compiles and runs against the virtual circuit in real time. Click it again (it becomes a ■ Stop button) to stop.

## Adding components

Click the **+** button above the circuit area to open the parts search. Type the name of whatever you need — "LED," "resistor," "pushbutton" — and drag it onto the canvas. Once it's placed, click and drag from one of its pins to a pin on the Arduino to wire them together; Wokwi draws the wire for you.

## A couple of habits worth building early

- **Save often.** Wokwi gives your project its own URL — bookmark it or copy the link so you can come back to the same circuit later.
- **Read the error messages.** If your code doesn't compile, Wokwi shows the same kind of error you'd see in any C++ compiler, right below the code editor. It's usually pointing at exactly the line to fix.

That's really all you need to get started. From here on, whenever a page says "use Wokwi to try this," this is the workflow: open a new Arduino Nano project, add the parts mentioned, wire them up, paste in the code, and hit ▶.
