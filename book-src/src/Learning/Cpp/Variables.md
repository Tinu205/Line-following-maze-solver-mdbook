# Variables & Data Types

In our home we have separate boxes to store different items. In the same way, a program deals with lots of different kinds of data. Say we're writing code to collect the name and age of every student in a class. We need a place to store the names and ages separately, and that's where variables come in.

A variable is a labelled box in the computer's memory. You tell C++ what kind of thing the box holds, give it a name, and put a value in.

<div style="text-align: center;">
    <img src="../../Assets/Images/variables.png" width="450">
</div>

```cpp
int age = 14;            // whole number
double height = 1.52;    // number with a decimal point
char grade = 'A';        // one character, single quotes
bool passed = true;      // only true or false
string name = "Meera";   // text, double quotes (needs #include <string>)
```

| Type | Holds | Examples |
| --- | --- | --- |
| `int` | whole numbers | -7, 0, 250 |
| `double` | numbers with decimals | 3.14, -0.5 |
| `char` | exactly one character | 'k', '7' |
| `bool` | a yes/no answer | true, false |
| `string` | text of any length | "Good morning" |

The box can be refilled any time, which is why it is called a *variable*: `age = 15;` replaces what was inside. If you don't want the value to change, use the `const` keyword, as in `const double PI = 3.14159;`.

Names cannot contain spaces and cannot start with a digit or a symbol. Use `total_marks` or `totalMarks`, never `total marks` or `2ndTest`.

## Doing maths with variables

C++ has the usual arithmetic operators:

| Operator | Means | Example | Result |
| --- | --- | --- | --- |
| `+` | add | `7 + 2` | 9 |
| `-` | subtract | `7 - 2` | 5 |
| `*` | multiply | `7 * 2` | 14 |
| `/` | divide | `7.0 / 2` | 3.5 |
| `%` | remainder after dividing | `7 % 2` | 1 |

There is a handy shortcut for updating a variable: `total += 5;` means `total = total + 5;`. The same works for `-=`, `*=` and `/=`. And `i++` means "add 1 to `i`". You'll see these a lot in loops and arrays.

### The integer division trap

When you divide two `int` values, C++ throws away the decimal part:

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 7 / 2;          // both are int, so the answer is cut down to 3
    double b = 7.0 / 2;     // one side has a decimal point, so we get 3.5
    cout << a << endl;
    cout << b << endl;
}
```

**Output:**

```
3
3.5
```

This matters a lot for robots. Suppose you add up three sensor readings (`int` values) and divide by 3 to get an average. If you divide `int` by `int`, you lose the decimals and your bot's idea of "how far from the line" will be slightly wrong. To keep the decimals, make one side a `double`, for example `total / 3.0`.

## Reading values from the user

To get a value from the person running the program, use `cin`.

```cpp
#include <iostream>
using namespace std;

int main() {
    int marks;
    cout << "Enter your marks: ";
    cin >> marks;
    cout << "You scored " << marks << " out of 100" << endl;
}
```

**Sample run** (the number 85 is typed by the user):

```
Enter your marks: 85
You scored 85 out of 100
```

Notice that `marks` is declared *before* we read into it, so the computer has a box ready to put the value in.

Now let's try reading a string. To use `string`, add `#include <string>` at the top.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Your name is " << name << endl;
}
```

**Sample run:**

```
Enter your name: Meera
Your name is Meera
```

> `cin >> name` reads only **one word**, up to the first space. If you type `Meera Rao`, `name` will hold just `Meera`. To read a whole line, use `getline(cin, name);` instead.

> 💡 **Try it yourself** — write a program that asks for your name and your age, then prints a sentence using both. Try it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then compare it with a friend's.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Variable | `int age = 14;` | a labelled box with a fixed type |
| Output | `cout << x << endl;` | arrows point away from you |
| Input | `cin >> x;` | arrows point towards the variable |
| Update | `total += 5;` | same as `total = total + 5;` |

**Next up:** [If-Else](IfElse.md)
