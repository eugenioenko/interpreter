
##  @script (at-script)[![Build Status](https://travis-ci.org/eugenioenko/interpreter.svg?branch=master)](https://travis-ci.org/eugenioenko/interpreter)
This is a work in progress of an interpreter writen in typescript of a scripting language somewhat similar to javascript.

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## variable definition
To define a variable use the keyword 'var' folowed by variable name and an optional initialization expression.
Default value of all variables is 'null' unless initialization expression is provided.
```
    var boolean = true;
    var number = 1;
    var variable = "string";
    var list = ['one', 'two', 'three' ];
    var dictionary = {
        property: 'value'
	    key: 'value',
	};
    var object = new Object();
    var something;
```
variables can't be defined twice with the same name, the interpreter will throw an error
```
    var variable = 1;
    var variable = 2; // illegal, identifier has the same name
```


## conditional statements
### if, else if, else
```
    if (condition) {
        // todo
    } else if (another_condition) {
       // todo
    } else {
      // todo
    }
```
## Loop statements
### while
```
    while (condition) {
    	// todo
    }
```
### do while
```
    do {
       // todo
    } while (condition);
```
### for
```
    for (initializer; condition; increment) {
      // todo
    }
```
 ## functions
 Functions are defined by using the 'function' keyword or '@', followed by an optional list of parameters and a body statement (block statement or single statement).
 Same as variables, functions cannot be defined twice with the same name.
- *function*, *@* work as synonyms


```
    function name(alfa, beta) {
        // to do
    }

    @name(alfa, beta) {
        // to do
    }

    var name = function(alfa, beta) { };

    var name = @(alfa, beta) { };

```
### return value
Optionaly functions can provide a return value.
To define a return value use the keyword 'return' or '->' followed by an expression.
Arrow operator '=>' is available to define single statement return functions.
- *->* works as 'return' synonym
- *=> expression* works as short form of '{ return expression }'
All this are equivalent
```
    function add(a, b) {
        return a + b;
    }

    @add(a, b) {
        -> a + b;
    }

    @add(a, b) => a + b;
```
#### immediately-invoked function expression (IIFE):
```
    (function (alfa, beta) {
       return alfa + beta;
    })('alfa', 'two');

    (@(alfa, beta) {
       return alfa + beta;
    })('alfa', 'two');

    (@(alfa, beta) => alfa + beta)('one', 'two');
```

## Classes
Classes can be defined by using the keyword 'class' followed by a name identifier.
The body of a class consist of a list of methods defined as functions

```
    class Person {
        constructor(name) {
            this.name = name;
        }
        hello() {
            print this.name + ' says hi';
        }
    }
```

#### Inheritance
To extend a class from a base class 'extends' keyword can be used followed by a base class name.
To reference methods from the base class use 'base' keyword followed by method name from the base class.
```
    class Student extends Person {
        constructor(name, grade) {
            base.constructor(name);
            this.grade = grade;
        }
        hello() {
            base.hello();
            print 'from ' + this.grade + ' grade';
        }
    }
```
#### Objects / Instances
To create an instance of a class use 'new' keyword followed by a class name and a call to the class's constructor

```
var student = new Student('John', '3C');
print student.hello();
```

## Lists / Arrays
To create an array use '[]' as a value;
- Accesing with a number index returns the array values.
- Accesing with a range index returns a slice of the array.
```
    var x = [1, 20, 300];
    var y = [100, x[1]];
    print y[0];
    y.push(x);
    y.newProperty = "anything";
    print y.join(',');
    print x[::-1].join(','); // reverses array and prints it
    print [1,2,3] + [4,5,6]; // joins to arrays
```
You can concat two arays by using '+' operator.
```
var xArray = [1,2,3];
var yArray = [4,5,6];
var zArray = xArray + yArray;
```
### Implemented methods:
- *.pop()*: removes last element from the array and returns it
- *.push(value)*: adds an element at the end of the array
- *.join(separator)*: returns a string representation of the array with value separated by separator
- *.size()*: returns length of the array
- *.each(@(value, index, array){})*: executes callback passing value, index and array as argument
- *.map(@(value, index, array){})*: remaps the values of the array by executing mapping funciton passing value, index and array as argument
- *.find (@value, index, array){})*: returns value from the array which if callback returns true
- *.indexOf(value)*: returns the index of the value inside the array
- *+* you can join to arrays by using plus operator, alternatively there is a concat method
- *.concat(array)*: returns a new array with values of two joiner arrays.
- *.slice(start, end)*: returns a slice of the array

## Range:
array[start : end : step];
Similar to python step provides the dirrection of the slice. Start provides from where to slice and end provides the end index of the slice

## Strings
Strings are instances of StringEntinty objects.
- Accesing with a number index returns the string value.
- Accesing with a range index returns a slice of the string.
- Accesing with a string index returns the object property. (only for get, setting a property in string won't modify the property, similarly to javascript)
```
var s = "hello world";
print s[1]; // prints 'e'
print s[6::]; // prints 'world'
print s[::-1] // prints 'dlrow olleh';
var d = ("hello" + " world").size();
```
### Implemented methods:
- #.length: proeprty returns size of the string
- *.size()*: returns size of the string
- *.substr(start, end)*: returns a substring
- *.split(char)*: splits string into array using char as separator
- *.toLowerCase(): returns new string converted to lower case
- *.toUpperCase(): returns new string converted to upper case
- *.replace(needle, replacer)*: replaces the needle in the string with replacer
- *.alter(regex, replacer)*: replaces string values using regex as argument by replacer(string) (pending test)


### utility functions / statements
```
    print variable; // prints in the interperter console.
```

#### random notes:
 - semicolons are required after each expression statement;


### contents, compiling, installing
The package consist of a tokenizer/scanner, a parser and an interpreter.
To compile the contents download the repo and:

> npm install
> npm run start

Inside tools folder there is a handy generator to create statement and expression classes lists. If modified to regenerate the files run
> npm run generator

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## collaboration
This project is designed with fun and discovery in mind. Typescript transpiles to javascript making this interpreter be almost a js like language interpreter running on js.

If you want to have some fun with it, implement an interesting feature,  tried it out and noticed an anoying bug,  or just have a question: please contact me and I'll answer asap. Pull requests are very welcome.

### thanks and kudos
to @munificent for publishing the book on [lox interpreter](http://www.craftinginterpreters.com/)
