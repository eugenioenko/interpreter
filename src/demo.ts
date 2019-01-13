export const DemoSourceCode =
`
// recursivity
function recursive(n, m) {
  if (n < m)
    return recursive(n + 1, m);
  return n;
}
print recursive(0,5);

// string length operator '$'
print "the length of hellow world is: " + $"hello world";
print  $"hello" === 6 ? 'hello is 5 character length' : 'it is not';

// while loop and ternary operator
let i = 0;
while (i <= 10) {
    print i % 2 ? 'odd' : 'even';
    i = i + 1;
}

// native method rand()
function showRand(a) {
  echo("random: " + a + rand());
}
showRand(" text ");


// while loop
var counter = 1;
while (counter < 10) {
  echo("counter is: " + counter);
  counter = counter + 1;
}

// if else block
if (counter == 10)
  echo("counter is 10");
else
  echo("counter is not 10");

// do while block
counter = 1;
do {
  echo(counter + counter);
  counter = counter + 1;
} while (counter < 10);

echo(counter);

// scope and closure
var a = "global a";
var b = "global b";
var c = "global c";
{
  var a = "outer a";
  var b = "outer b";
  {
    var a = "inner a";
    echo(a);
    echo(b);
    echo(c);
  }
  echo(a);
  echo(b);
  echo(c);
}
echo(a);
echo(b);
echo(c);

function test() {

}
test.prototype.method = function() {
    print "hello world";
};
print test.method();
`;
