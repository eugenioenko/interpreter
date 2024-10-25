
##  @script (at-script)
This is a work in progress of an interpreter written in typescript of a scripting language somewhat similar to javascript which borrows some ideas from python.

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## statements
AtScript code consist of a list of statements which will be executed by AtScript interpreter.

Multiple statements can occur on a single line but they have to be separated by a semicolon.

Expression, Var, Print and Return statements require a semicolon `;` at the end as delimiter;

AtScript interpreter at its current stage recognizes the following statements:

#### Declaration
- var: variable definition
- function: function definition
- class: class definition

#### Control Flow
- block: scope creation
- if else: conditional flow
- return: exit from function
- break: exits from current loop
- continue: skips current iteration in the loop

#### Loop
- while
- do while
- for
- foreach

#### Other
- expression: expression statement
- print: prints value to the console

## variable definition

The **var** statement creates a variable and optionally initializes it.
> `var` *`identifier`* [ `=` *`expression`* ] `;`

- *`identifier`*: can be any alphanumeric word, being the first character a letter.
- *`expression`*: can be any expression that returns a value.
- Default value of all variables is '**null**' unless initialization expression is provided.

```
    var boolean = true;
    var number = 1;
    var string = "string";
    var list = ['one', 'two', 'three' ];
    var dictionary = {
        property: 'value'
	    key: 'value',
	};
    var object = new Object();
    var nothing = null;
    var something; // null value
    var func = function(a, b, c) {
        print a + b + c;
    };
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
**if** statements can be chained together to achieve complex control flow

> `if` `(` *`condition`* `)` `{` <br>
    *`statements`* `;` <br>
`}` `else` `if` `(` *`condition`* `)` `{` <br>
    *`statements`* `;` <br>
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
#### foreach
```
    for (item with key in list) {
        print item;
        print key;
    }

    for (item in list) {
        print item;
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


## Data Types

AtScript implements the following data types:

- *Number*: includes integers and doubles
- *Boolean*: true or false
- *String*: string type
- *List*: lists/arrays of values
- *Dictionary*: contains {key: value} pairs
- *Null*: initial value of variables
- *Function*
- *Class*
- *Range*: used to access slices of lists and strings
- *RegExp*: contains regular expressions

### List / Array
To create an array use '[]' as a value;
- Accessing with a number index returns the array values.
- Accessing with a range index returns a slice of the array.
- You can concat two arrays by using '+' operator.
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

#### Implemented methods:
- *.concat(list2)*: returns a new list with values of two joined lists.
- *.each(@(value, index, list){})*: executes callback passing value, index and list as argument
- *.includes(value)*: returns true if list contains value
- *.indexOf(value)*: returns the index of the value inside the list
- *.lastIndexOf(value)*: returns the last index of the value inside the list
- *.join(separator)*: returns a string representation of the list with value separated by separator
- *.map(@(value, index, list){})*: remaps the values of the list by executing mapping function passing value, index and list as argument
- *.pop()*: removes last element from the list and returns it
- *.push(value)*: adds an element at the end of the list
- *.shift(value)*: adds an element at the start of the list
- *.size()*: returns length of the list
- *.slice(start, end)*: returns a slice of the list
- *.unshift()*: removes first element from the list and returns it

#### Range:
list[start : end : step];
Similar to python step provides the direction of the slice. Start provides from where to slice and end provides the end index of the slice

### String
- Accessing with a number index returns the string value.
- Accessing with a range index returns a slice of the string.
- Accessing with a string index returns the object property. (only for get, setting a property in string won't modify the property, similarly to javascript)
```
var s = "hello world";
print s[1]; // prints 'e'
print s[6::]; // prints 'world'
print s[::-1] // prints 'dlrow olleh';
var d = ("hello" + " world").size();
```
### Implemented methods:
- *.concat()*: concatenates two strings together
- *.includes(value)*: true if string contains value
- *.indexOf(value)*: returns first index of the occurrence of value in the string
- *.lastIndexOf(value)*: returns last index of the occurrence of value in the string
- *.replace(needle, replacer)*: replaces the needle in the string with replacer
- *.search(value)*
- *.size()*: returns size of the string
- *.slice(start, count)*: returns a slice of the string
- *.split(char)*: splits string into array using char as separator
- *.substring(start, end)*: returns a substring
- *.toLower()*: returns new string converted to lower case
- *.toUpper()*: returns new string converted to upper case
- *.trim()*: removes trailing white spaces


### Dictionary / Table
To create a dictionary use '{ }' as a value.  You can also set pair of '{ key: value }'s

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

#### Implemented methods:
- *.size()*: returns size of the dictionary
- *.each(@(value, index, dictionary){})*: executes callback passing value, index and dictionary as argument
- *.map(@(value, index, dictionary){})*: remaps the values of the dictionary by executing mapping function passing value, index and dictionary as argument
- *.indexOf(value)*: returns the key of the value inside the dictionary
- *.merge(dictionary)*: merges two dictionaries together and returns the new dictionary
- *.clear()*: removes all key value pairs from dictionary
- *.has(key)*: true if dictionary contains key

```
var a = {a: 'one'};
var b = {b: 'two'};
var c = a + b;
print c; // prints {a: 'one', b: 'two'}
```


### utility statements
```
    print variable; // prints in the interpreter console.
```

## Operators

### `?.` Safe Navigation
Safe navigation operator can be used to avoid an  error when reading a property from null value.
When reading a property from a null value, it will return null instead of erroring out.
```
    var dict = {
        property: {
            okey: "str"
        }
    }
    print dict.property.okey; // prints "str"
    print dict.noproperty.wrong; // Error,  wrong doesn't exist on null
    print dict.noproperty?.wrong; // prints null
```

### `?:` Ternary
Ternary operator evaluates the condition and depending if the condition is truthy it will evaluate truthy or falsy expression.
It can be used as a shorthand of an "if" statement.

>  *`expression`* `?` *`truthy expression`* : *`falsy expression`* `;`

```
    var t = value ? 'yes' : 'no';
    this.method() ? trueBlock() : falseBlock();
```

### `delete`
"delete*" operator  removes a key from a dictionary, a class or an entity

> `delete`  *`get expression`* `;`

```
    var obj = { property: 'value' };
    delete obj.property;
    print obj;
```

### `typeof`
"typeof*" operator outputs the data type of a given expression in string format;

> `typeof`  *`expression`* `;`

```
    print typeof "str"; // prints string
    print typeof  1; // prints number
    print typeof true; // prints boolean
    print typeof null; // null
```
- Null: "null"
- Boolean: "boolean"
- Number: "number"
- String: "string"
- List: "list"
- Dictionary: "dictionary"
- Object: "object"
- Class: "class"
- Function: "function"

### `is`
The is operator checks if the result of an expression is compatible with a given type
> *`expression`* `is` *`type`* `;`
```
    print ['one', 'two'] is list; // prints true
    function test() {
        // to do
    }
    print test is function; // prints true

```

It will also return true if an object is direct instance of a class.
To check if an object is an inherited instance of a class use "instanceof" operator

```
    class Parent { }
    class Child extends Parent { }

    var entity = new Child();

    print entity is class;   // false: entity is an object, not a class
    print entity is object;  // true: entity is an object
    print entity is Parent;  // false: entity is not direct instance of Parent, it was constructed with Child constructor
    print entity is Child;   // true: entity is a direct instance of Child

```

### `instanceof`
The "instanceof" operator is used to test whether the object is an instance of the specified class or subclass.
As side effect, it will also return false if the object is not an object.

> *`expression`* `instanceof` *`class name`* `;`

```
    class Parent { }
    class Child extends Parent { }
    class Unrelated { }

    var entity = new Child();

    print entity instanceof Object;    // true: all objects derive from internal Object Class
    print entity instanceof Child;     // true: entity is a direct instance of Child
    print entity instanceof Parent;    // true: entity is an indirect instance of Parent. Child class inherits from Parent class
    print entity instanceof Unrelated; // false: entity is not an instance of Unrelated

```

### void
"void" operator evaluates an expression and discards its value returning always null
> `void` *`expression`* `;`

```
    print void 2 * (5 + 10) + 100; // prints null
```

### in
"in" operator evaluates whether a key/index exists in an enumerable entity.
 - key exists in a dictionary
 - index exists in a list
 - property is part of an object
 - method is part of a class
 - string is included in another string

 > *`expression key`* `in` `*expression entity*` `;`

```
    print 'b' in 'abcdefg';
    print 3   in ['one', 'two', 'three', 'four'];
    print 'key' in {key: 'value', property: 'value'};
```
### ??
The null-coalescing operator "??" returns the value of its left-hand operand if it isn't null; otherwise, it evaluates the right-hand operand and returns its result. The "??" operator doesn't evaluate its right-hand operand if the left-hand operand evaluates to non-null.

> *`expression`* `??` *`expression`* `;`

```
   print null ?? true;  // prints true
   print false ?? true; // prints false
```

### ..
Range operator allows to define range data type with a fixed step.
If start is smaller than end, step will be +1
If start is bigger than end, step will be -1
> *`start`* `..` *`end`* `;`

```
    const a = [1..5]; // [1,2,3,4,5]
    const b = [1..5, 10..15]; // [1,2,3,4,5, 10,11, 12,13,14,15]
```

### ...
Spread operator allows strings, lists and dictionaries to be expanded into elements where a list or key-value pair separated by comma is expected. It also can be used to perform binary operations on expanded elements.
> `...` *`expression`* `;`

Can be used in call expressions, list and dictionary and binary expressions;
> `[` `...` *`expression`* `]` `;`
> `{` `...` *`expression`* `}` `;`
> `myFunc(` `...` *`expression`* `)` `;`
> `...` *`expression`* `operator` `...` *`expression`* `;`
```
   var dict1 = {one: 'first', two: 'second'};
   var dict2 = {...dict1}; // expands each key-value pair of dict1 into dict2
   var list1 = [...dict1]; // expands the values of the dict1 into the list, keys are ignored
   var dict3 = {...list1}; // expands the values of the list1 into the dict, keys are the index of the value in the list
   var range = [...1..100]; // expands the range into values
   print ...[1,2,3] == ...[1,2,3]; // prints [true, true, true], performs comparison on each element of the list
   print (..."abc" + ..."abc").join(''); // prints "aabbcc"
```

### <=>
Spaceship operator is used for comparing two expressions. It returns: -1, 0 or 1 left expression is less than, equal to, or greater than right expression:
> `expression` *`<=>`* `expression` `;`

```
    print 2 <=> 1; // prints 1
    print 2 <=> 2; // prints 0
    print 1 <=> 2; // prints -1
```
### '#'
The char code operator '#' returns the character with the char code of the value of the expression
> *`#`* `expression` `;`

```
    print #64; // prints '@'
```

## contents, compiling, installing, cli
The package consist of a tokenizer/scanner, a parser and an interpreter.
To compile the contents download the repo and:

> npm install <br> npm run start

Inside tools folder there is a handy generator to create statement and expression classes lists. If modified to regenerate the files run
> npm run generator

### Cli
An interactive cli is available
> npm run cli

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## Testing 
At-script employs Jasmine for unit testing to ensure code reliability and maintainability. The tests are organized in the /specs folder, allowing for easy navigation and management of test cases. However, the current test coverage needs improvement, and additional tests are encouraged to enhance the robustness of the framework.

## collaboration
This project is designed with fun and discovery in mind. Typescript transpile to javascript making this interpreter be almost a js like language interpreter running on js.

If you want to have some fun with it, implement an interesting feature,  tried it out and noticed an annoying bug,  or just have a question: please contact me and I'll answer asap. Pull requests are very welcome.

### thanks and kudos
to @munificent for publishing the book on [lox interpreter](http://www.craftinginterpreters.com/)
