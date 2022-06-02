// const myName="Okunzo";
// newArray=myName.split("").reverse();
// console.log(newArray.join(""));
// var rev="";
// const newString=myName.split("");
// for(let i=newString.length-1; i>=0; i--){
//       rev+=newString[i];
//       };


// console.log(rev)


// function stringRev(name){
//   if(name===""){
//     console.log("Enter a String") ;
//   } else{
//     var rev="";
//     let newString=name.split("");
//     for(let i=newString.length-1; i>=0; i--){
//       rev+=newString[i];
//       };
//       console.log(rev);
//   }
//   if(rev===name){
//     console.log("This is a palindrome");
//   } else{
//     console.log("This is not a palindrome");
//   }
// }
// stringRev("22022022");


// const numbers  = (arr,target) =>{
//   let num1;
//   let num2;
//   for(let i = 0 ; i < arr.length ; i++){
//       for(let j = i + 1; j < arr.length ; j++){
//           if(arr[j] + arr[i] === target){
//               num1 = arr[i];
//               num2 = arr[j];
//           }
//       }
//   }


//   console.log(`the two numbers are ${num1} and ${num2}`);


// }

// numbers([4,5,2,1],3)

// console.log(Math.PI*28)
// console.log(Math.floor(35.6329))
// console.log(Math.pow(4,9))
// console.log(Math.sqrt(9))

// const myNums=[2,3,10,30,99];
// console.log(Math.max(myNums.join("")))

// const maxNum=(listOfNums)=>{
  // console.log(Math.max(10,36,87,220,16));
 
// };
// maxNum((10,36,87,220,16));
// var maximum = Math.max(45, -76, 86, 7, 1, 0, 1024, 67, -346);

// console.log(maximum);

// console.log(Math.random()*10);

// const calcTip= (bill)=>{
// var tip;

// if(bill<=300 && bill>=50){
//   tip=bill*0.15;
// }else{
//   tip=bill*0.2;
// }
// var totalValue=bill+tip;
// console.log(`The bill value is ${bill} and the tip is ${tip} and total value is ${totalValue}`);


// };

// calcTip(200);


//variables, dataTypes,  fuctions, Array and Objects & Methods, DOM manipulation, Events, conditional statements, loops.

// Definition or declaration of a variable
//keywords- var, const, let
// var firstName= "Ninah";

// console.log(firstName);

// let secondName= "Odoyo";
// console.log(secondName);
// console.log(`My name is ${firstName} ${secondName}`);


// let yourName= "Charles";
// yourName="Winston";
// yourName="Nina";


// console.log(yourName);
// const pi=3.142;

// pi=4;
// console.log(pi);

//Arrays and Objects
// Arrray- collection of data

const studentNames=["Ninah", "Charles", "Winston", "James"];
// console.log(studentNames[1]);
// console.log(studentNames[3]);
// var moringa=studentNames[2];
// console.log(moringa);

// studentNames.push("Okunzo");
// console.log(studentNames);
// studentNames.push("Rose");
// console.log(studentNames);




const emptyArray= [];
emptyArray[0]="Ubuntu";
emptyArray[1]="Windows";
emptyArray[2]="MacBook";
// emptyArray.push("Home");
console.log(emptyArray);
