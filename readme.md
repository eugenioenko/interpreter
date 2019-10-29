
##  @script (at-script)[![Build Status](https://travis-ci.org/eugenioenko/interpreter.svg?branch=master)](https://travis-ci.org/eugenioenko/interpreter)
This is a work in progress of an interpreter writen in typescript of a scripting language somewhat similar to javascript.

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## statements
AtScript applications consist of a list of statements.

- A statement can span single or multiple lines.
- Statements expression, var, print and return use semicolon ";" as separator.
- Multiple statements can occur on a single line but they have to be separated by a semicolon.

AtScript interpreter recognizes the following statements:

#### Declaration
- var
- function
- class

#### Control Flow
- block
- if else
- return

#### Loop
- while
- do while
- for

#### Other
- expression
- print

Expression, Var, Print and Return statements require a semicolon `;` at the end as delimiter;

## variable definition

The **var** statement creates a variable and optionally initializes it.
> `var` *`identifier`* [ `=` *`expression`* ] `;`

- *`identifier`*: can be any alphanumeric word, being the first character a letter.
- *`expression`*: can be any expression that returns a value.
- Default value of all variables is '**null**' unless initialization expression is provided.

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

Variables can't be defined twice with the same name, the interpreter will throw an error

```
    var variable = 1;
    var variable = 2; // illegal, identifier has the same name
```

## Control Flow Statements

### if else
The **if** statement executes a statement if the specified condition is evaluates to truthy. If the condition is not truthy, optionally the **else** statement can be executed.
> `if` `(` *`condition`* `)` *`statement`* [`else` *`statement`*]

- *`condition`*: can be any expression that returns a value. If the evaluated value is truthy
- *`statement`*: can be any statement except declaration statements like (var, function and class)

### Multiple if, else if, else
**if** statements can be chained together to achive complex control flow

> `if` `(` *`condition`* `)` `{` <br>
    *`statements`* `;` <br>
`}` `else` `if` `(` *`condition`* `)` `{` <br>
    *`statements`* `;`
`}` `else` `{` <br>
    *`statements`* `;` <br>
`}`

#### Truthy / Falsy

A value is "truthy" when it is not "falsy"

Falsy values are:
- null
- boolean false
- number 0
- empty string
- empty lists
- empty dictionary

### while
> `while` `(` *`condition`* `)` `{`<br>
    *`statements`* `;` <br>
`}`

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

 ## function
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

## Class
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
#### Object / Instance
To create an instance of a class use 'new' keyword followed by a class name and a call to the class's constructor

```
var student = new Student('John', '3C');
print student.hello();
```

## List / Array
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

## String
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
- *.size()*: returns size of the string
- *.substr(start, end)*: returns a substring
- *.split(char)*: splits string into array using char as separator
- *.toLowerCase()*: returns new string converted to lower case
- *.toUpperCase()*: returns new string converted to upper case
- *.replace(needle, replacer)*: replaces the needle in the string with replacer

## Dictionary / Table
- To create a dictionary use '{ }' as a value.  You can also set pair of '{ key: value }'s
- Keys can be a string or a number value
- Values can be any variable type, lambda functions included
- To access the value use dot '.' or bracket notation '[]' getters
```
var dictionary = {
    'property': 'value',
    'method': @(a, b) => a + b
}
print dictionary.property; // prints 'value';
print dictionary['method']; // prints '<lambda function>'
print dictionary['method']('hello', 'world'); // prints 'helloworld';
```
### Implemented methods:
- *.size()*: returns size of the dictionary
- *.each(@(value, index, dictionary){})*: executes callback passing value, index and dictionary as argument
- *.map(@(value, index, dictionary){})*: remaps the values of the dictionary by executing mapping funciton passing value, index and dictionary as argument
- *.indexOf(value)*: returns the key of the value inside the dictionary
- *+*: you can merge to dictionaries together by using the plus '+' operator
```
var a = {a: 'one'};
var b = {b: 'two'};
var c = a + b;
print c; // prints {a: 'one', b: 'two'}
```


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
