# If-Else
Now let's look into condional statements. Before we dive deeper into coding part, it's important to understand why do we need a conditional statement in first place. In programming we often need our program to make decision based on a situation. For example, think about deciding wheter to carry an umbrella. 

You might think "if it's raining I'll take if it isn't I won't ".

Similarly `if` asks a yes/no question and runs a block of code only when the answer is yes. `else` covers every other case.

```cpp
#include <iostream>
using namespace std;
int main(){
    int marks = 72;

    if (marks >= 40) {
        cout << "Pass" << endl;
    } else {
        cout << "Fail" << endl;
    }
}
```

The question inside the brackets is built with comparison operators.

| Operator | Means | With `marks = 72` |
| --- | --- | --- |
| `==` | is equal to | `marks == 72` is true |
| `!=` | is not equal to | `marks != 40` is true |
| `>` | is greater than | `marks > 90` is false |
| `<` | is less than | `marks < 90` is true |
| `>=` | is at least | `marks >= 72` is true |
| `<=` | is at most | `marks <= 71` is false |

The single `=` assigns a value, the double `==` compares. Writing `if (marks = 40)` quietly changes the marks to 40 instead of checking them.

When there are several possible answers, chain them with `else if`. The checks run top to bottom and stop at the first true one, so the order matters.

```cpp
#include <iostream>
using namespace std;

int main(){
    int marks = 82;
    if (marks >= 90) {
        cout << "Grade A";
    } else if (marks >= 75) {
        cout << "Grade B";
    } else if (marks >= 60) {
        cout << "Grade C";
    } else if (marks >= 40) {
        cout << "Grade D";
    } else {
        cout << "Needs improvement";
    }
}
```

Join two questions with `&&` (both must be true), `||` (either one is enough) or `!` (flip the answer).

```cpp
#include <iostream>
#include <string>
using namespace std;
int main(){

    int age = 16;
    string day = "Saturday";
    if (age >= 13 && age <= 19) {
        cout << "Teenager" << endl;
    }

    if (day == "Saturday" || day == "Sunday") {
        cout << "Holiday" << endl;
    }
}
```

**Try it.** Read a number and print whether it is positive, negative or zero. Then extend it: read three numbers and print the largest.

> 💡 **Try it yourself** — run every branch of your grade checker in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/) by testing marks of 95, 80, 65, 45 and 20.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Decision | `if (x > 0) { } else { }` | `==` compares, `=` assigns |

**Next up:** [Loops](Loops.md)
