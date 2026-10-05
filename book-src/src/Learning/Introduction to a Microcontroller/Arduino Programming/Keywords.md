# Keywords

## Words you'll see often

When you read Arduino code, you will notice a handful of words again and again. They are not all the same kind of thing, though. It helps to sort them into three groups:

1. **Keywords and types**: words that are part of the C++ language itself.
2. **Built-in functions**: ready made actions that Arduino gives you.
3. **Predefined constants**: named values like `HIGH` and `OUTPUT`.

## 1. Keywords and data types

**Keywords** are words with a special meaning in C++. They are *reserved*, which means you cannot use them as names for your own variables. They are also case-sensitive: `int` is a keyword, but `Int` is not.

* **Data types** tell the Arduino what kind of data a variable holds:
  * `int` : whole numbers, such as `-5` or `300`
  * `float` : decimal numbers, such as `3.14`
  * `bool` : true or false (`boolean` is an Arduino alias for the same thing)
  * `byte` : a small whole number from 0 to 255
  * `long` : a bigger whole number than `int`
  * `char` : a single character, such as `'A'`
  * `void` : "nothing", used for functions that return no value
* **Other keywords:**
  * `const` : a value that must never change
  * `true`, `false` : the two values of a `bool`
* **Decision and loop keywords** control which code runs:
  * `if`, `else`, `switch`, `case`
  * `for`, `while`, `break`, `continue`
  * `return`

> `String` (with a capital S) is not a keyword. It is a type that Arduino provides for text, which is why it is not in the list above.

## 2. Built-in functions

These are **not** keywords. They are functions that the Arduino system has already written for you, so you can call them by name. You *could* technically reuse these names, but you should not, because it would confuse you and your code.

* **Program structure functions** (you write the body, Arduino calls them for you):
  * `setup()` : runs once at the start
  * `loop()` : runs over and over after `setup()`
* **Pin functions:**
  * `pinMode()` : set a pin as input or output
  * `digitalWrite()` / `digitalRead()` : write or read an on/off value
  * `analogRead()` : read a voltage as a number from 0 to 1023
  * `analogWrite()` : send a PWM signal (0 to 255)
* **Timing:**
  * `delay()` : pause for some milliseconds
* **Serial Monitor:**
  * `Serial.begin()`, `Serial.print()`, `Serial.println()`

## 3. Predefined constants

These are names that stand for fixed values. By convention they are written in CAPITAL letters.

* `HIGH`, `LOW` : the two digital levels (5V and 0V)
* `INPUT`, `OUTPUT` : used with `pinMode()`
* `INPUT_PULLUP` : an input with the Arduino's built in pull-up resistor turned on
* `LED_BUILTIN` : the pin number of the small LED on the board (pin 13 on the Nano)

## Quick example

```cpp
const int ledPin = 13;      // const and int are keywords

void setup() {              // void is a keyword, setup is a function
  pinMode(ledPin, OUTPUT);  // pinMode is a function, OUTPUT is a constant
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}
```

You do not need to memorize these. You will use them so often that they will become familiar quickly.

**Next up:** [Structure](Structure.md)
