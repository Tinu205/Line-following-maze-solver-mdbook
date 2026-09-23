# Variables & Data Types

In our home we have separate containers/boxes to store different items. Similarly we'll be dealing with a lot of different kind of datas while programming, let's assume we're writing a code to collect name and age of students in a class room, so we need a place to store the names and ages separately, that's where variables comes in. A variable is a labelled box in the computer's memory. You tell C++ what kind of thing the box holds, give it a name, and put a value in. 

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

The box can be refilled any time, which is why it is called a *variable*: `age = 15;` replaces what was inside. Now what if we don't want the value to be changed, like your phone password or a mathematical constant then we'll use `const` keyword, as in `const double PI = 3.14159;`.

To get a value from the person running the program, use `cin`.

```cpp
#include <iostream>
using namespace std;
int main(){
    int marks;
    cout << "Enter your marks: ";
    cin >> marks;
    cout << "You scored " << marks << " out of 100" << endl;
}
```
Here note that we have added an extra line after `#include<iostream>` which is `using namespace std` for now understand it as when reading a value this line is added so we don't have to add std::cin or writing a value std::cout. Also note that we've written marks before reading and storing it, because we need to tell the computer to create a variable marks which will store integer values.

Two traps that catch everyone once:

- Dividing two `int` values throws away the decimals. `int x = 7 / 2;` stores 3, not 3.5. Write `7.0 / 2` and keep the answer in a `double`.
- Names cannot contain spaces and cannot start with a digit. Use `total_marks` or `totalMarks`, never `total marks` or `2ndTest`.

Now let's try to read a name

```cpp
#include <iostream>
#include <string>
using namespace std;
int main(){
    string name;
    cout<<"Enter your name: ";
    cin>>name;
    cout<<"Your name is"<<name<<endl;
}
```

As mentioned earlier to use `strings` we use `#include <string>` to tell the computer we are going to use string.
**Try it.** Store your name, your age and your height, then print: `Meera is 14 years old and 1.52 m tall.`

> 💡 **Try it yourself** — write it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/) before checking your answer against a friend's.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Variable | `int age = 14;` | a labelled box with a fixed type |
| Output | `cout << x << endl;` | arrows point away from you |
| Input | `cin >> x;` | arrows point towards the variable |

**Next up:** [If-Else](IfElse.md)
