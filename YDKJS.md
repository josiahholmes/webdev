# You Don't Know JavaScript: Cliff Notes

## Book 1: *Up & Going*

### **Into Programming**

**Code**: A set of special instructions to tell the computer what tasks to perform.

**Statement**: A group of words, numbers, and operators that perform a specific task.

An example of a statement might be:

```javascript
a = b * 2;
```
'a' and 'b' are **variables**, which are used to hold items (like putting clothes in a box). '2' is a **literal value**, in that it can stand alone without having to be stored in a variable.

The '=' and '*' symbols are **operators**, which can be used to perform actions on variables and values. In this case, assignment and mathematical multiplication.

The above statement tells the computer to take the value stored in 'b', multiply it with the number 2, and store that new value in 'a'.

**Expression**: Any reference to a variable or value, or a set of variables and values combined with operators.

The statement 'a = b * 2' has four expressions:

* 2 is a *literal value* expression.
* 'b' is *variable* expression, which retrieves the value stored in it.
* 'b * 2' is an *arithmetic* expression, which does multiplication.
* 'a = b * 2' is an *assignment* expression, which takes the value of 'b * 2', and stores it in 'a'.

**Expression statement**: A general expression that stands alone, such as:

```javascript
b * 2;
```

Another expression is called a **call expression**, as the statement is a function call:

```javascript
alert(a);
```

For the computer to complete the set of instructions, the program must be *executed*. But computers don't read code the same way humans would. In this case, a computer will utilize an *interpreter* or a *compiler* to translate the human-readable code into a special language known as *machine code*.

* **Interpreters**: Some computer languages are translated line by line, from top to bottom, every time a program is executed. In this way, the computer is *interpreting* the code.
* **Compilers**: Some computer languages are translated ahead of their execution. As the computer *compiles* the code, what runs is the already-translated machine code.

Most assume JavaScript is *interpreted* by a computer, but the JavaScript engine *compiles* the code and then runs the newly translated machine code.


