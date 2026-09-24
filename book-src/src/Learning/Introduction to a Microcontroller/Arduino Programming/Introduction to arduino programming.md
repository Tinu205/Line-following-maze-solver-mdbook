# Arduino Programming Language

## Arduino Language is Based on C++

* The Arduino language is a simplified version of C++.
* It retains core C++ features like variables, data types, operators, control structures, and functions.
* However, it streamlines syntax and adds specific functions for interacting with hardware.

## Why Arduino Programming?

* Simplified C++ syntax
* Clear structure
* Specific functions for hardware
* Libraries
* A wide range of projects

## Running an Arduino Program

* Arduino programs (called **sketches**) are saved in `.ino` format.
* The code is compiled in the Arduino IDE and uploaded to the respective Arduino board.

## Understanding the Difference Between Compiler and Interpreter

| Interpreter | Compiler |
|---|---|
| Translates just one statement of the program at a time into machine code. | Scans the entire program and translates the whole of it into machine code at once. |
| Takes very little time to analyze the source code. | Takes a lot of time to analyze the source code. |
| Keeps translating the program continuously until the first error is encountered. If an error is spotted, it stops working, hence debugging becomes easy. | Generates error messages only after it scans the complete program, hence debugging is relatively harder. |
| Used by programming languages like Ruby and Python. | Used by programming languages like C and C++. |

## Syntax

In programming, **syntax** is the set of rules that govern how code elements are arranged and written to create valid, meaningful instructions for a computer. It's like the grammar of a language, defining the structure and order of words, phrases, and sentences.

* **Keywords:** Reserved words with specific meanings in the language.
* **Statements:** Instructions that perform actions.
* **Expressions:** Combinations of values, variables, operators, and function calls that produce a result.
* **Operators:** Symbols that perform operations on values.
* **Variables:** Containers for storing data, with names and specific data types.
* **Data Types:** Define the kind of data a variable can hold.
* **Control Flow:** Statements that control the order of code execution.
* **Functions:** Reusable blocks of code that perform specific tasks.
* **Comments:** Text notes within code ignored by the compiler, used for explanations.
* **Brackets and Punctuation:** Used to structure code blocks, function calls, expressions, and statements.

## Bracketing

Brackets are essential for organizing code and defining blocks of instructions. They ensure clarity and proper execution of your program.

### Curly Braces `{ }`

* Enclose blocks of code within functions, conditional statements, and loops.
* Everything within the braces executes as a unit.

```cpp
void setup() {
    // Code to run once
}

void loop() {
    if (condition) {  // If block starts with curly brace
        // Code to execute if condition is true
    } else {          // Else block also uses curly brace
        // Code to execute if condition is false
    }
}
```

### Parentheses `( )`

* **Function calls:**

  ```cpp
  digitalWrite(LED_BUILTIN, HIGH);
  ```

* **Grouping expressions in calculations:**

  ```cpp
  x = (y + z) * 2;
  ```

* **Controlling order of operations:**

  ```cpp
  result = (a + b) / (c - d);
  ```

## Semicolon `;`

* **Statement Terminator:** The semicolon marks the end of a complete statement, signaling to the compiler where one instruction ends and the next begins.
* **Essential for Compilation:** Missing semicolons often lead to compiler errors, as the compiler struggles to interpret the code structure without clear boundaries.

```cpp
int sensorValue = 0;     // Declare and initialize a variable (ends with semicolon)
digitalWrite(13, HIGH);  // Turn on an LED (ends with semicolon)
delay(1000);             // Pause for 1 second (ends with semicolon)
```

### Key Points

* **Not Required for Block-Ending Braces:** Closing curly braces `}` at the end of functions, conditional blocks, and loops don't need semicolons.
* **Not Required for Preprocessor Directives:** Lines starting with `#` (like `#include` and `#define`) don't need semicolons.

## Line Commenting

Line comments are lines in the code that are not executable and are used only by the programmer. Commenting allows you to add notes and explanations within your code that are ignored by the compiler when it compiles the program. It's like writing little sticky notes within your code to explain what's happening or why you wrote something in a specific way.

### Single-Line Comment `//`

The text written after two forward slashes (`//`) is considered a single-line comment. The compiler ignores everything written after the two forward slashes on that line, and the comment is not displayed in the output.

```cpp
// This is a single-line comment explaining the next line.
```

### Multi-Line Comment `/* */`

A multi-line comment is used to group information for clear understanding and is commonly used for larger blocks of text. It starts with a forward slash and an asterisk (`/*`) and ends with an asterisk and a forward slash (`*/`). It is also ignored by the compiler.

```cpp
/* This is a multi-line comment.
   You can write multiple lines of text here. */
```