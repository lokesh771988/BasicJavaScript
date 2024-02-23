//let arr = new Array(5,4,6,10);
let arr = [5,6,7,8];
//console.log(arr[0]);
//console.log(arr[2]);
//arr[2]=9;
//console.log(arr[3]);
arr.unshift(9);
//console.log(arr.length);

console.log(arr);
//let lastValue = arr.pop();
//let firstValue = arr.shift();
let indexOfValue = arr.indexOf(5);
console.log(indexOfValue);
console.log(Array.isArray(arr));
