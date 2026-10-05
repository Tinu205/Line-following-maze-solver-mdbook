# Introduction to Arduino Programming

## The Arduino language is based on C++

* The Arduino language is C++ with some extra, hardware-friendly functions added.
* It has the usual C++ building blocks: variables, data types, operators, `if` statements, loops and functions. (If you want a refresher, see the [C++ chapter](../../Cpp/index.md).)
* On top of that, Arduino gives you ready-made functions such as `digitalWrite()` and `delay()` that talk to the pins on your board, and libraries for things like servo motors.

## Running an Arduino program

* Arduino programs are called **sketches**. They are saved as `.ino` files.
* A **compiler** (a translator) turns your sketch into machine code, the only language the chip understands. Then the code is uploaded to the board.
* If the compiler finds a mistake, it shows an error message and nothing gets uploaded. Read the message: it usually points to the line to fix.

## Syntax: the grammar of code

**Syntax** is the set of rules for how code must be written, just like grammar in English. The computer is very strict about it, so a small slip such as a missing bracket can stop your whole sketch from compiling. The next few sections cover the punctuation you need to get right.

## Curly braces `{ }`

* Curly braces enclose a block of code, such as the body of a function, an `if` or a loop.
* Everything inside the braces belongs together.

```cpp
void setup() {
  // Code to run once
}

void loop() {
  int sensorValue = analogRead(A0);

  if (sensorValue > 500) {
    // Code to run when the value is bigger than 500
  } else {
    // Code to run otherwise
  }
}
```

## Parentheses `( )`

Parentheses are used in function calls, and also to group calculations.

```cpp
digitalWrite(LED_BUILTIN, HIGH);   // function call
int x = (4 + 6) * 2;               // grouping: this is 20
```

## Semicolon `;`

* A semicolon marks the **end of a statement**, like a full stop at the end of a sentence.
* A missing semicolon is one of the most common causes of compiler errors.

```cpp
int sensorValue = 0;     // declare a variable
digitalWrite(13, HIGH);  // turn on an LED
delay(1000);             // pause for 1 second
```

A few places do *not* need a semicolon:

* After a closing curly brace `}` of a function, `if` or loop.
* After lines that start with `#`, such as `#include`.

## Comments

Comments are notes for people. The compiler ignores them completely, so they are like sticky notes in your code that explain what is happening and why.

* **Single-line comment:** everything after `//` on that line is ignored.
* **Multi-line comment:** everything between `/*` and `*/` is ignored.

```cpp
// This is a single-line comment.

/* This is a multi-line comment.
   You can write several lines here. */
```

**Next up:** [Keywords](Keywords.md)
