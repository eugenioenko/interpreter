export const DemoSourceCode =
`// Recursive function
function factorialize(n) {
    if (n < 0) {
        return -1;
    }
    if (n == 0) {
        return 1;
    }
    return (n * factorialize(n - 1));
}
print factorialize(5);

// Prototype objects
function MyClass(text) {
    this.text = text;
}

MyClass.method = function(text) {
    this.text = this.text + text;
};

MyClass.count = function(times) {
    function nested(num) {
        return num * num;
    }
    for (let i = 0; i < times; ++i) {
        print nested(i);
    }
};

var instance = new MyClass('Hello ');
instance.method('World');
instance.count(3);
print instance.text;

// string length operator '$'
print "the length of hellow world is: " + $"hello world";
print  $"hello" === 6 ? 'hello is 5 character length' : 'it is not';

// while loop and ternary operator
let i = 0;
while (i <= 4) {
    print i % 2 ? 'odd' : 'even';
    i = i + 1;
}

// literals
var literal = {
    firstname: "John",
    lastname: "Doe",
    records: {
        prev: "previous",
        next: "next"
    }
};

print literal.records.prev;
`;
