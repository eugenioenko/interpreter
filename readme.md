
##  @script (at-script)
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
- Accesing the indices with a number returns the array values.
- Accesing the indices with a string returns the object property.
```
    let x = [1, 20, 300];
    let y = [100, x[1]];
    print y[0];
    y.push(x);
    y.newProperty = "anything";
    print y.join(',');
```
So far there are only a few methods defined for arrays:
- pop(): removes last element from the array and returns it
- push(value): adds an element at the end of the array
- join(separator): returns a string representation of the array with value separated by separator

### Strings
There are two type of strings in atscript: Literal and Object.
- Literal: are the once enclosed by single quotes 'literal'
- Object: are the once enclosed by double quotes "string object"

The literal string provide no methods withing them because they are not objects.
They can be added together, to a number and printed but no manipulation of the content.
Object string provide the utilities like: size, split and others;

### utility functions
```
     echo(variable); // outputs variable in javascript console
     rand(); // returns a random number
     print variable; // prints in the interperter console.
```
### contents, compiling, installing
The package consist of a tokenizer/scanner, a parser and an interpreter.
To compile the contents download the repo and:

> npm install
npm run start

Inside tools folder there is a handy generator to create statement and expression classes lists. If modified to regenerate the files run
> npm run generator

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)
