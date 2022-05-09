const R = require('Ramda');
const p = R.reduce((acc,x) => R.compose(R.flip(R.prepend)(acc), R.sum,R.map(R.add(1)))([x,...acc]), [0])([13, 28]);
console.log(p);

const myPrepend = R.prepend([15,45]);
let result00 = myPrepend([0]);
console.log(`The prepend prepends [15, 45] to the [0] -> ${result00}`);
// the prepend transforms the list to -> [15, 45, 0]

const mylist = (a, b, c) => [].concat(a, b, c);
let result01 = R.flip(mylist)(15, 45, 0);
console.log(`my flip, flips the first 2 items in the list -> ${result01}`);
//and then the flip operates -> [45, 15, 0]

//console.log(`The result of myflip is -> [15, 13] e ${result0}`);
const add1 = R.add(1);
//add1 returns a fucntion wich sums up 1 with ists argument
let result1 = add1(0);
console.log(`add returns: ${result1} <=> 0 + 1 = 1`);
//the function sum returns a function tha sums up 1 to its argument
const mymap= R.map(R.add(1));
let result2 = mymap([13,28]);
console.log(`map returns: ${result2} returns the object [14, 29]`);
//The map does this: add 1 to [13, 28] <=> [13+1, 28+1] = [14, 29]
const mysum = R.sum(result2);
console.log(`mysum returns: ${mysum} it sums all the items of the object result2`);
//As the result2 was the list [14, 29], it sums 14 + 29 = 43
// but in the given function we have also de add(1) that when invoked 14+1 + 29+1 = 45
// wich goes to [15, 45]


let acc = [13,28];
const firstInList = (acc) =>R.flip(R.prepend)(acc);
let result3 = firstInList(0);
console.log(result3);



