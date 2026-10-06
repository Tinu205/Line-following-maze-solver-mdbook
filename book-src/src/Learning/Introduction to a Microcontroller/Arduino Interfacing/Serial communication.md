## Serial Communication

So far, whenever something went wrong in your code, you had no real way to peek inside and see what was happening you could only guess from how the LED behaved. Serial communication fixes that: it lets your Arduino send text back to your computer over the same USB cable that powers it, so you can actually see what your program is thinking while it runs.

Think of it like a walkie-talkie between the Arduino and your laptop. The Arduino can key up and say "sensor reads 512" or "button pressed," and that message shows up as text on your screen in something called the **Serial Monitor**. This is, by far, the most useful debugging tool you'll use for the rest of this course whenever your bot does something unexpected, printing out sensor values is usually the first thing to try.

### Setting it up

Before you can send anything, both sides need to agree on how fast they're talking this speed is called the **baud rate**. You set it once, in `setup()`:

```cpp
void setup() {
  Serial.begin(9600);
}
```

`9600` means 9600 bits per second. It's a common default. The baud rate in your code **must match** the one chosen in the Serial Monitor (9600). If they don't match, you will see garbled characters or nothing at all.

### Sending data

Once serial is started, you have two ways to send text:

```cpp
Serial.print("Hello");     // stays on the same line
Serial.println("World");   // prints, then moves to a new line
```

`print` keeps writing on the same line, which is handy for building up one message piece by piece. `println` adds a line break at the end, so the next thing you print starts fresh below it. Both can print numbers too, not just text `Serial.println(sensorValue);` works exactly as you'd expect.

### Seeing it for yourself in Velxio

Once your code is running in Velxio, look for its serial output panel (see the [Velxio walkthrough](index.md) if you're not sure where that is). Anything your code sends with `Serial.print` or `Serial.println` shows up there, live, as your program runs.

### Putting it together

Let's bring back the button and LED from the last page, and add serial messages so we can watch what's happening without even looking at the LED:

```cpp
void setup() {
  pinMode(2, INPUT_PULLUP);
  pinMode(8, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int value = digitalRead(2);
  if (value == LOW) {
    digitalWrite(8, HIGH);
    Serial.println("Button pressed");
  } else {
    digitalWrite(8, LOW);
    Serial.println("Button released");
  }
  delay(100);  // slow down the printing so it is easy to read
}
```

Now the sketch prints a line about ten times a second, saying whether the button is pressed or released, in real time, on your computer exactly the kind of visibility you'll rely on once you're staring at raw sensor numbers later in this course.

>**Try it.** Add a line that also prints the raw `value` (0 or 1) alongside the message, so you can see the actual number behind the HIGH/LOW state.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Start serial | `Serial.begin(9600);` | do this once, in `setup()` |
| Print text | `Serial.print("text");` | stays on the same line |
| Print with newline | `Serial.println("text");` | moves to a new line after |

**Next up:** [Pulse Width Modulation](PWM.md)
