
##  @script (at-script)[![Build Status](https://travis-ci.org/eugenioenko/interpreter.svg?branch=master)](https://travis-ci.org/eugenioenko/interpreter)
This is a work in progress of an interpreter writen in typescript of a scripting language somewhat similar to javascript.

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

### variable definition
```
    var variable = "string";
    let number = 1;
    let object = {
	    property: "property"
	};
```
While *var* definition lets you override a variable, *let* will throw an error.
```
    let variable = 1;
    let variable = 2; // illegal
```
### conditional statements
```
    if (condition) {
        // todo
    } else if (another_condition) {
       // todo
    } else {
      // todo
    }
```
### Loop statements
#### while
```
    while (condition) {
    	// todo
    }
```
#### do while
```
    do {
       // todo
    } while (condition);
```
#### for
```
    for (initializer; condition; increment) {
      // todo
    }
```
 ### functions
- *function*, *func*, and *@* work as synonyms
- *->* works as "return" synonym
- *=> expression* works as short form of "{ return expression }"

```
    function name(alfa, beta) {
         return alfa + beta;
    }
    func name(alfa, beta) {
       return alfa + beta;
    }
    @ name(alfa, beta) {
       return alfa + beta;
    }
    @name(alfa, beta) {
       return alfa + beta;
    }
    let name = function(alfa, beta) {
       return alfa + beta;
    }
    let name = @(alfa, beta) {
       return alfa + beta;
    }
    @name(alfa, beta) {
        -> alfa + beta;
    }
    @name(alfa, beta) => alfa + beta;
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
### prototype functions and inheritance
```
    @MyClass(arg) {
       this.arg = arg;
    }
    MyClass.method = @(){
       print this.arg;
    };
    let myClass = new MyClass('foo');
```

*new* will copy all the properties of the class into its prototype and call the constructor function.
If MyClass is executed as a function without *new*, *this* will be null.
#### prototype inheritance
```
    @Parent(name) {
        this.name = name;
    }
    Parent.method = @(){};

    @Child(name, other){
        Parent.invoke(this, name);
        this.other = other;
    };
    Child.extend(Parent);
    Child.method = @() {
        Parent.method.invoke(this);
        // todo: child method statements
    };
```
*invoke* method will call the function and pass the desired this as argument. This way *this* can be manipulated  for each method or function.
In essence this two would be equivalent:
```
    @MyClass() {
        this.name = 'name';
    }

    let myClassA = {};
    MyClass.invoke(myClassA);
    let myClassB = new myClass();

    print myClassA.name;
    print myClassB.name;
```
### sugar-coated classes and inheritance
```
    class MyParent {
        constructor(alfa) {
            this.something = 'anything' + alfa;
        }
    }
    class MyClass extends MyParent {
        constructor(){
            super('nothing');
        }
    }
    let c = new MyClass();
    print c.something;
```

### Arrays
Arrays are instances of ArrayEntinty objects.
To construct an empty array use "[]" as a value;
- Accesing with a number index returns the array values.
- Accesing with a range index returns a slice of the array.
- Accesing with a string index returns the object property.
```
    let x = [1, 20, 300];
    let y = [100, x[1]];
    print y[0];
    y.push(x);
    y.newProperty = "anything";
    print y.join(',');
    print x[::-1].join(','); // reverses array and prints it
    print [1,2,3] + [4,5,6]; // joins to arrays
```
You can concat two arays by using '+' operator.
```
let xArray = [1,2,3];
let yArray = [4,5,6];
let zArray = xArray + yArray;
```
#### Implemented methods:
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
- *.reverse()*: returns the array reversed
- *.slice(start, end)*: returns a slice of the array

#### Range:
array[start : end : step];
Similar to python step provides the dirrection of the slice. Start provides from where to slice and end provides the end index of the slice

### Strings
Strings are instances of StringEntinty objects.
- Accesing with a number index returns the string value.
- Accesing with a range index returns a slice of the string.
- Accesing with a string index returns the object property. (only for get, setting a property in string won't modify the property, similarly to javascript)
```
let s = "hello world";
print s[1]; // prints 'e'
print s[6::]; // prints 'world'
print s[::-1] // prints 'dlrow olleh';
let d = ("hello" + " world").size();
```
#### Implemented methods:
- *.size()*: returns size of the string
- *.substr(start, end)*: returns a substring
- *.split(char)*: splits string into array using char as separator
- *.toLowerCase(): returns new string converted to lower case
- *.toUpperCase(): returns new string converted to upper case
- *.replace(needle, replacer)*: replaces the needle in the string with replacer
- *.alter(regex, replacer)*: replaces string values using regex as argument by replacer(string) (pending test)


#### Range:
array[start : end : step];
Similar to python step provides the dirrection of the slice. Start provides from where to slice and end provides the end index of the slice

### RegEx:
- #{regex}#{flags}#
- Accepted flags are g,i,m,s and u
let alpha = #[a-z]#g#;
#### Implemented methods:
- *.exec("string")*: executes a search and returns array result or null
- *.test("string")*: executes a search and returns true or false if found
- *"string".alter(regex, replacer)*: replaces string values using regex as argument (pending test)


### utility functions
```
     echo(variable); // outputs variable in javascript console
     rand(); // returns a random number
     print variable; // prints in the interperter console.
```

#### random notes:
 - semicolons are required after each expression statement;


### contents, compiling, installing
The package consist of a tokenizer/scanner, a parser and an interpreter.
To compile the contents download the repo and:

> npm install
npm run start

Inside tools folder there is a handy generator to create statement and expression classes lists. If modified to regenerate the files run
> npm run generator

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

## collaboration
This project is designed with fun and discovery in mind. Typescript transpiles to javascript making this interpreter be almost a js like language interpreter running on js.

If you want to have some fun with it, implement an interesting feature,  tried it out and noticed an anoying bug,  or just have a question: please contact me and I'll answer asap. Pull requests are very welcome.

### thanks and kudos
to @munificent for publishing the book on [lox interpreter](http://www.craftinginterpreters.com/)
