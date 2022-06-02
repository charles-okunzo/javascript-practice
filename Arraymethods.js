//shift, unshift, forEach, slice, includes

// shift removes the first element of an array and shifts all the other elements to a lower index. Returns te strin that was shifted out

// let cars= ["BMW", "Toyota", "Nissan"];

// cars.shift();

// console.log(cars);


//unshift- adds a new element at the beginning of an array
//returns the new array length

// let cars= ["BMW", "Toyota", "Nissan"];

// cars.unshift("Tesla");

// console.log(cars.unshift("Tesla"));


//slice-slices out a part of an array and returns a new array. can take arguments.

// let cars= ["BMW", "Toyota", "Nissan", "Benz", "Discovery"];

// console.log(cars.slice(1,3));

// The includes() method returns true if an array contains a specified value.

// The includes() method returns false if the value is not found.

// The includes() method is case sensitive.

// let cars= ["BMW", "Toyota", "Nissan"];
//  console.log(cars.includes("VW"))

//.forEach- calls a function for each element on an array

//syntax


// Array.forEach(function (item, index, arr){
//   block of code;
// })

// const digits=[1, 20, 30, 20, 45];

// digits.forEach(function(item, index, arr){
//   arr[index] = item * 10;
// });

// console.log(digits)
// let sum=0;
// const digits=[1, 20, 30, 20, 45];

// digits.forEach(function(item){
//   sum+=item;
// })

// console.log(sum);

// var fName= '"Charles"';
// var sName= "Okunzo";
// console.log(fName +" "+ sName);
// console.log(`${fName} ${sName}`);

let myName="Charles Okunzo";

function myFunc (){
// let myName= "Meeee";
console.log(myName);
}

myFunc();