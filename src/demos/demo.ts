export const DemoSourceCode =
`
//
var d = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4
};
var it = d.iterator();
while (!it.done) {
    it.next();
    print it.value;
}

`;
