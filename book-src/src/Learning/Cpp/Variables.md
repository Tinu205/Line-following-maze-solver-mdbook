# Variables & Data Types

In our home we have separate containers/boxes to store different items. Similarly we'll be dealing with a lot of different kind of datas while programming, let's assume we're writing a code to collect name and age of students in a class room, so we need a place to store the names and ages separately, that's where variables comes in. A variable is a labelled box in the computer's memory. You tell C++ what kind of thing the box holds, give it a name, and put a value in. 

<div style="text-align: center;">
    <img src="../../Assets/Images/variables.png" width="450">
</div>

<!-- ```cpp
int age = 14;            // whole number
double height = 1.52;    // number with a decimal point
char grade = 'A';        // one character, single quotes
bool passed = true;      // only true or false
string name = "Meera";   // text, double quotes (needs #include <string>)
``` -->


| Type | Holds | Examples |
| --- | --- | --- |
| `int` | whole numbers | -7, 0, 250 |
| `double` | numbers with decimals | 3.14, -0.5 |
| `char` | exactly one character | 'k', '7' |
| `bool` | a yes/no answer | true, false |
| `string` | text of any length | "Good morning" |

The box can be refilled any time, which is why it is called a *variable*: `age = 15;` replaces what was inside. Now what if we don't want the value to be changed, then we'll use `const` keyword, as in `const double PI = 3.14159;`.

## Reading values from user

To get a value from the user running the program, use `cin`.

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
Here note that we have added an extra line after `#include<iostream>` which is `using namespace std`, this changes the namespace to std, so you don't have to use `std::cin` or `std::cout` instead you can use just `cin` or `cout`. Also note that the mark variable is declared before reading it, so computer can create a variable mark to store the value before reading the actual value.

<!-- Two traps that catch everyone once:

- Dividing two `int` values throws away the decimals. `int x = 7 / 2;` stores 3, not 3.5. Write `7.0 / 2` and keep the answer in a `double`.
- Names cannot contain spaces and cannot start with a digit or a symbol. Use `total_marks` or `totalMarks`, never `total marks` or `2ndTest` or `!total_marks`. -->

Now let's try reading a string.

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

As mentioned earlier to print / read a **string** we use `#include <string>` to import string library, thus informing the computer we would like to functions related to string.


>  **Try it yourself** — write it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/) before checking your answer against a friend's.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Variable | `int age = 14;` | a labelled box with a fixed type |
| Output | `cout << x << endl;` | arrows point away from you |
| Input | `cin >> x;` | arrows point towards the variable |

**Next up:** [If-Else](IfElse.md)
