# Welcome, Young Roboticists!

Over the next few weeks you will build a robot that drives itself. It is an **Arduino Nano line-following robot** that looks at a black line on the floor with its own sensors, works out where the line went, and steers to stay on it. By the end, it will find its way through a **maze**.

You do not need any experience. This book starts from zero and takes you one small step at a time.

## What you will learn

- **C++ basics:** how to write instructions a computer can follow.
- **Electronics:** circuits, voltage, current and the parts that go into them.
- **Microcontrollers:** how an Arduino Nano works and how to program it.
- **Robotics:** sensors, motors, and the control ideas (bang-bang and PID) that keep a bot on the line.
- **Maze logic:** the LSRB / RSLB rules that let your bot choose a path at every junction.

## How to use this book

Read in this order. Each step builds on the one before it.

1. **[Learning](Learning/index.md)** has four sections. Go through them in order:
   1. [C++](Learning/Cpp/index.md)
   2. [Introduction to Electronics](Learning/Introductions%20to%20Electronics/index.md)
   3. [Introduction to Microcontrollers](Learning/Introduction%20to%20a%20Microcontroller/index.md)
   4. [Introduction to Robotics](Learning/Introduction%20to%20robotics/index.md)
2. **Software Setup:** install the [Arduino IDE](Software%20Setup/Arduino_ide.md) and get to know the [Velxio Editor](Software%20Setup/Velxio%20Editor.md), the simulator used in this course.
3. **[Tasks](Tasks/index.md):** put it all to work, one task at a time.

You do not have to finish all of Learning before Task 1. Each Task Brief links to the exact pages you need, so read those first and come back to the rest as you go.

## The six tasks

| Task | Goal |
| --- | --- |
| [Task 1: Programming Fundamentals](Tasks/Task_1/Brief.md) | Variables, if-else, loops, functions and arrays in C++. |
| [Task 2: Introduction to Arduino](Tasks/Task_2/Brief.md) | Digital and analog I/O, Serial Communication and PWM with the Arduino Nano. |
| [Task 3: Understanding the Bot](Tasks/Task_3/Brief.md) | Read the IR sensors and drive the motors on real hardware. |
| [Task 4: Bang-Bang Line Following and P Controller](Tasks/Task_4/Brief.md) | Make the bot follow a line, first with bang-bang, then with a P controller. |
| [Task 5: PD / PID Control](Tasks/Task_5/Brief.md) | Add the D term (and optionally I) for smoother line following. |
| [Task 6: LSRB / RSLB Maze Logic](Tasks/Task_6/Brief.md) | Handle junctions with priority rules so the bot can navigate a maze. |

Every task has a **Brief** (what you are building) and an **Assignment** (what to submit and how).

## What you will need

- A computer with internet access.
- The [Arduino IDE](Software%20Setup/Arduino_ide.md) installed, and access to the [Velxio Editor](Software%20Setup/Velxio%20Editor.md) in your browser.
- For Task 1, a free [HackerRank](https://www.hackerrank.com/) account (see the Task 1 Assignment).
- The Arduino Nano robot with its IR sensor array and motors, from Task 3 onwards.

Not sure about anything else, such as how to get the robot kit? Check the [Announcements](announcements.md) page and ask your teacher or mentor.

## Dates and deadlines

The [Announcements](announcements.md) page has the competition timeline. Check it often, because dates and updates are posted there.

## Tips for success

- **Do the "Try it" boxes.** Reading code is not the same as writing it. Typing it, running it and breaking it on purpose is how it sticks.
- **Ask for help early.** Do not wait until you are completely stuck. Talk to your teammates, teacher or mentor as soon as something stops making sense.
- **Go back when you need to.** Every Task Brief links to the Learning pages behind it. Revisiting a page is normal.
- **Use the search bar.** Press `S` or click the magnifying glass at the top of the page to search the whole book.
- **Test in small steps.** Run your code after every few lines, so you always know what broke.

Ready? Head to the [Learning](Learning/index.md) section and start with C++.
