## Velxio Editor

For this course we will write and test our code in the [Velxio Editor](https://velxio.dev/editor).

🎥 New to it? Watch this [walkthrough video](https://youtu.be/qtPL0q0q8V4) before your first circuit.

## What is Velxio?

Velxio is a free, browser-based simulator for Arduino and other boards. You write code on one side and build a circuit on the other, then run the two together. There is no real Arduino involved, so even if you wire something wrong, nothing can get damaged.

According to our [Getting Around Velxio](../Learning/Introduction%20to%20a%20Microcontroller/Arduino%20Interfacing/index.md) page, you do not need to install any software or create an account to use it.

## Opening the editor

1. Open a web browser on your computer.
2. Go to [velxio.dev/editor](https://velxio.dev/editor).
3. Wait for the page to finish loading. You should see a **code editor** and a **circuit canvas** (your virtual breadboard).

For a tour of what each area is for, read [Getting Around Velxio](../Learning/Introduction%20to%20a%20Microcontroller/Arduino%20Interfacing/index.md). The steps below are just a quick checklist.

## Your first project, step by step

1. **Choose the board.** Pick **Arduino Nano**, the board used in this competition. Use the board or board-selection option in the editor.
2. **Add parts.** Add the components a page asks for (an LED, a resistor, a push button and so on) to the circuit canvas.
3. **Wire them up.** Connect the parts to the Nano's pins. Compare your wiring with the reference image on the page you are following before you run anything. Most "nothing happens" problems are a wire on the wrong pin.
4. **Write the code.** Type or paste your sketch into the code editor. It is the same C++ you have been practicing.
5. **Run the simulation.** Start it. If the code has a mistake, Velxio will show an error message pointing at the line to fix.
6. **Open the serial output.** If your code uses `Serial.println()`, look for the serial output panel in Velxio to see the messages. Set the baud rate to 9600 to match `Serial.begin(9600)`. See [Serial Communication](../Learning/Introduction%20to%20a%20Microcontroller/Arduino%20Interfacing/Serial%20communication.md).
7. **Save or share your work.** Look for a save, export or share option in the editor. If you can't find one, copy your code into a text file on your computer so you never lose it.

> The exact names and positions of buttons may differ from this list, since the website can change. The walkthrough video shows the current layout.

## Tips

* Use an up-to-date browser such as Chrome, Edge or Firefox.
* Work on a computer with a keyboard and mouse. A tablet or phone can make wiring tricky.
* Save your code outside the browser too, in case the tab closes.
* Make small changes and run often, so you know which change caused a problem.

## If it doesn't load

* Check your internet connection and refresh the page.
* Try a different browser, or open a private (incognito) window. Browser extensions such as ad blockers can sometimes interfere.
* Close other heavy tabs and wait a minute, since a simulator can be slow on a busy computer.
* If it still does not work, ask your mentor or organizer, or use the [Arduino IDE](Arduino_ide.md) with a real board.
