// alert("Click me to Proceed");
console.log("hey I am a javascript code");

// Comments in javascript
// single line comments are written using //
// Multiline comments are written using /* */
/* console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");*/

var a ={name:"Prasad ", age:"24", city:"Mumbai"}
var b ={name:"Viral",age:"24" , city:"Mumbai"}
var c ={name:"Sai-Kiran",age:"24", city:"Mumbai"}

console.time("Time Taken");
console.log("Hey");
console.error("an error occured!");
console.warn("Hey this is a warning");
//console.log(a)
//console.log(b);
//console.log(c);
//console.log({a,b,c})
console.table({a,b,c})
console.log('%c Custom message','color blue;')
console.timeEnd("Time taken");