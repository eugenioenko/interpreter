
##  @script (atScript)
This is a work in progress of an interpreter writen in typescript of  a scripting language which shares some similarities with javascript.

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)

### variable definition
    var variable = "string";
    let number = 1;
    let object = {
	    property: "property"
	};
While *var* definition lets you override a variable, *let* will throw an error.

    let variable = 1;
    let variable = 2; // illegal

### conditional statements
    if (condition) {
        // todo
    } else if (another_condition) {
       // todo
    } else {
      // todo
    }

### Loop statements
#### while
    while (condition) {
    	// todo
    }

#### do while
    do {
       // todo
    } while (condition);

#### for
    for (initializer; condition; increment) {
      // todo
    }

 ### functions
*function*, *func*, and *@* work as synonyms

    function name(alfa, beta) {
         return alfa + beta;
    }
    func name(alfa, beta) {
       return alfa + beta;
    }
    let name = function(alfa, beta) {
       return alfa + beta;
    }
    let name = @(alfa, beta) {
       return alfa + beta;
    }

#### Immediately-invoked Function Expression (IIFE):

    (function (alfa, beta) {
       return alfa + beta;
    })('alfa', 'two');

    (@(alfa, beta) {
       return alfa + beta;
    })('alfa', 'two');

### prototype functions and inheritance

    @MyClass(arg) {
    	this.arg = arg;
    }
    MyClass.method = @(){
       print this.arg;
    };
    let myClass = new MyClass('foo');


*new* will copy all the properties of the class into its prototype and call the constructor function.
If MyClass is executed as a function without *new*, *this* will be null.
#### prototype inheritance

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
*invoke* method will call the function and pass the desired this as argument. This way *this* can be manipulated  for each method or function.
In escence this two would be equivalent:

    @MyClass() {
        this.name = 'name';
    }

    let myClassA = {};
    MyClass.invoke(myClassA);
    let myClassB = new myClass();

    print myClassA.name;
    print myClassB.name;

 ### utility functions
     echo(variable); // outputs variable in javascript console
     rand(); // returns a random number
     print variable; // prints in the interperter console.

### contents, compiling, installing
The package consist of a tokenizer/scanner, a parser and an interpreter.
To compile the contents download the repo and:

> npm install
npm run start

Inside tools folder there is a handy generator to create statement and expression classes lists. If modified to regenerate the files run
> npm run generator

### > [Try it out in playground!](https://eugenioenko.github.io/interpreter/)
