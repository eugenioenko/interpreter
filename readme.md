
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
```
So far there are only a few methods defined for arrays:
- pop(): removes last element from the array and returns it
- push(value): adds an element at the end of the array
- join(separator): returns a string representation of the array with value separated by separator

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
#### Range:
array[start : end : step];
Similar to python step provides the dirrection of the slice. Start provides from where to slice and end provides the end index of the slice
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
