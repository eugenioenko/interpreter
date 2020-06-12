export const DemoSourceCode =
`

// iterators
var it = iter("string");
while (!it.next().done) {
    print it.value;
}
print 'done';

`;
