/* 
Higher Order Function
*/

/*
 Using map function 
 */


const array1=[1,16,25,36];

// pass a function to map 
const map1=array1.map( a => a * 2);

console.log(map1);
// expected output : Array [2,32,50,72]

/*
 Using Filter Function
*/


const price = [21,46,85,79];
resule = price.filter(price => 25);

console.log(price);
// expected output : [46,85,79]

/*
Using Reduce Function
*/

const array1 = [1,2,3,4];
const reducer= (accumulator,currentValue)=> accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer,5));