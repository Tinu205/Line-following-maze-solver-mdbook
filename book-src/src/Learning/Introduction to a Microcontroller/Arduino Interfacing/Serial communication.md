## Serial Communication

So far, whenever something went wrong in your code, you had no real way to peek inside and see what was happening — you could only guess from how the LED behaved. Serial communication fixes that: it lets your Arduino send text back to your computer over the same USB cable that powers it, so you can actually see what your program is thinking while it runs.

Think of it like a walkie-talkie between the Arduino and your laptop. The Arduino can key up and say "sensor reads 512" or "button pressed," and that message shows up as text on your screen in something called the **Serial Monitor**. This is, by far, the most useful debugging tool you'll use for the rest of this course — whenever your bot does something unexpected, printing out sensor values is usually the first thing to try.

### Setting it up

Before you can send anything, both sides need to agree on how fast they're talking — this speed is called the **baud rate**. You set it once, in `setup()`:

```cpp
void setup() {
  Serial.begin(9600);
}
```

`9600` means 9600 bits per second. It's a common default, and as long as the Serial Monitor on your computer is also set to 9600, the two sides understand each other.

### Sending data

Once serial is started, you have two ways to send text:

```cpp
Serial.print("Hello");     // stays on the same line
Serial.println("World");   // prints, then moves to a new line
```

`print` keeps writing on the same line, which is handy for building up one message piece by piece. `println` adds a line break at the end, so the next thing you print starts fresh below it. Both can print numbers too, not just text — `Serial.println(sensorValue);` works exactly as you'd expect.

### Seeing it for yourself in Wokwi

Once your code is running in Wokwi, look for the **Serial Monitor** panel (usually below the code editor). Anything your code sends with `Serial.print` or `Serial.println` shows up there, live, as your program runs.

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
  if (value == 0) {
    digitalWrite(8, HIGH);
    Serial.println("Button pressed");
  } else {
    digitalWrite(8, LOW);
    Serial.println("Button released");
  }
}
```

Now every press and release shows up as a line of text, in real time, on your computer — exactly the kind of visibility you'll rely on once you're staring at raw sensor numbers later in this course.

> 💡 **Try it.** Add a line that also prints the raw `value` (0 or 1) alongside the message, so you can see the actual number behind the HIGH/LOW state.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Start serial | `Serial.begin(9600);` | do this once, in `setup()` |
| Print text | `Serial.print("text");` | stays on the same line |
| Print with newline | `Serial.println("text");` | moves to a new line after |

**Next up:** [Pulse Width Modulation](PWM.md)
