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

var s = new Person();
s.hello();
`;
