export const DemoSourceCode =
`

class Person {

    constructor(name) {
        this.name = name;
    }

    hello() {
        print this.name + ' says hello';
    }
}

class Student extends Person {

    constructor(name, grade) {
        base.constructor(name);
        this.grade = grade;
    }

    hello() {
        base.hello();
        print this.name + 'is in grade ' + this.grade;
    }
}

var s = new Student('John', 3);
s.hello();


`;
