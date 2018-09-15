class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/*
Things to note:
- Class declaration are not hoisted and need to 
be defined before use in code.

- The body of a class is executed in strict mode,
which helps the code comply with stricter syntax for
better performance speeds.

- Constructor method helps initialize an object of the
class type. There is only one constructor in a class, 
otherwise a SyntaxError will be thrown.
*/