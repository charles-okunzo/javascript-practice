// var name= "charlo okunzo";
// console.log(name.slice())
// console.log(name.length)

// var mySchool= "Moringa school"
// console.log(mySchool.toUpperCase());
// console.log(mySchool.toLowerCase());
// console.log(mySchool[4].toUpperCase().slice(1))

// var age =20;
// age+=2;
// console.log(age)

//numbers
// float 26.8
// int 30
// strings
// "" ''
// boolian true || false
// undefined 
// null


// let array1=[1, "two", 3, "four"];
// array1.length=7
// console.log(array1);

// let array2= new Array(1,"two",3, "four");
// console.log(array2);
// let array3=Array(1,2,"three", "four", true, "");
// console.log(array3.length)

//creating empty arrays
// let array1=[];
// array1.length=1;
// console.log(array1);
// let array2= new Array(5);
// console.log(array2);
// let array3=Array(4)
// console.log(array3)


// let array4=[60];
// console.log(array4)
// let array4=new Array(60)
// console.log(array4)

//Adding elements to an array.
// array1=[];
// array1.length=4;
// array1[0]="one";
// array1[1]=2;
// array1[2]= "susan";
// array1[3]="andy";
// array1[4]="charles";
// array1[5]="malenge"
// console.log(array1)

//For loops
// for (let i=0; i<6; i++){
//     console.log("hello world", i);
// };

//only odd numbers/even numbers
// for (let i=0; i<6; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }

//Reverse order
// for(let i=6; i>0; i--){
// if(i%2==0){
//     console.log(i)
// }
// }

//recap for loop
// for(let i=0; i<10; i+=1){
//     console.log(i);
// }
// for(let i=20; i<=30; i+=5){
//    console.log(i)
// }


//  var cars= ["Toyota", "Mercedes Benz", "BMW", "Isuzu", "Subaru", "Mazda"];
// for (let i=0; i<cars.length;i++){

//     if(i%2!==0){
//         console.log(cars[i])
//     }
// }


// var studentInfo={
//     name:"charles",
//     age: 20,
//     maritalStatus:true
// }
// for(detail of studentInfo){
//     console.log(detail)
// }

// for(detail in studentInfo){
//     console.log(detail, studentInfo[detail])
// }
// var total =0;
// for(let i=0; i<=1100; i++){
//     total+=i;
    
// }
// console.log(total)

//for loops
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

//syntax for loop
// for(let x=0; x<=5; x++){
//     console.log(x);
// }
// for(let y=0; y<=100; y++){
//     console.log(y)
// }
// for(let y=0; y<=100; y+=2){
//     console.log(y)
// }
// for(let y=0; y<=100; y++){
//     if(y%2==0){
//         console.log(y)
//     }
// }
// var total=0;
// for(let x=0; x<=1000000; x++){
//     total+=x;
// }
// console.log(total)

// var cars=["Toyota", "Nissan", "Mercedes Benz","Range rover", "Mazda","Honda","Subaru"];
// for(let i=0; i<cars.length; i++){
//     console.log(cars[i])
// }
//for...of syntax
// for(variable of array){
    
// }
// for(let content of cars){
//     console.log(content)
// }
// let student={firstName:"Charlo", secondName:"Okunzo", age:30, language:"English,Swahili"};
// console.log(student.firstName)
// console.log(student["age"])

//for...in loop
// for(let prop in student){
//     console.log("My "+prop+" is "+ student[prop])
// }

//functions
// function myFunction(){
//     console.log("hello world")
// }
// myFunction();

// function addNums(numA,numB){
    
//     console.log(numA * numB);
// }
// addNums(2,4)

// var malls=["garden city", "juja city mall","trm"]
// malls.forEach(function(element){console.log(element)})

// malls.push("moringa");
// console.log(malls)

// malls.pop();
// console.log(malls)

// var animals=["dog", "monkey", "cat", "cow"];
// for(let i=0; i<animals.length;i++){
//     console.log(animals[i])
// }
// animals.forEach(function(anim){console.log(anim)})
// for(let animal of animals){
//     console.log(animal)
// }
// animals.forEach(function(animal){console.log(animal)})

//Array methods
//.push(), .pop(), .reverse(), .join(delimeter), .slice(), .forEach(), .concat(), .split(delimeter).
// var teachers=["matiangi", "sossion", "uhuru", "kidero"];
// var principals=["manu", "willy", "philip"]
// teachers.push("susan", "joshua")
// teachers.pop()
// teachers.reverse()
// var newGroup= teachers.concat(principals)
// var newString=newGroup.join(",")
// console.log(newString)
// var newArray= newString.split(",")
// console.log(newArray)
// console.log(teachers)

// let myArray = [1,2,3,4,5,6];
// myArray = myArray.slice(3, 5);
// console.log(myArray);

//while loops
// var myName= window.prompt("Enter your name");
// while(myName==""){
//     window.prompt("Enter your name");
// }
// spn.innerHTML="Good morning "+myName+ ". Welcome to my page!";
// spn.style.color="white";
// spn.style.backgroundColor="grey"

//do...while

// do{
//     window.prompt("Enter your name");
// }while(myName=="")

//Array methods
// forEach, push, pop, concat, join, split, reverse, slice
//1. forEach()

// const weapons=["guns","bullets", "knifes","arrows"];
// weapons.forEach(function(weapon){console.log(weapon)})


//2. push()
// weapons.push("bomb", "missile","rocket")
// console.log(weapons)

//3.pop()- removes the last element from an array.
// weapons.pop();
// console.log(weapons)

//4. concat()-adds two or more arrays to form a single array
// const weapons=["guns","bullets", "knifes","arrows"];
// const military=["airforce", "navy", "KDF"];
// const studentNames=["Charlo", "Joshua", "Susan"];
// const newArray= weapons.concat(military,studentNames);
// console.log(newArray)

//5. join(delimiter)-joins elements of an array to form a string.
// const weapons=["guns","bullets", "knifes","arrows"];
// const newString=weapons.join(",");
// console.log(newString)

//6.split(delimiter)
// const arrayMod=newString.split(",");
// console.log(arrayMod)

//7. reverse()
// const weapons=["guns","bullets", "knifes","arrows"];
// const revArray=weapons.reverse();
// console.log(revArray)

//8. slice()
// const weapons=["guns","bullets", "knifes","arrows"];
// const slicedArray=weapons.slice(1,2);
// console.log(slicedArray)


//Keyed collections
// Two kinds- Maps and Sets
//Maps
//Creating maps
// const myMap= new Map();

//Adding data to Maps
// myMap.set("one", 1);
// myMap.set("two", 2);
// myMap.set("three", "three");
// console.log(myMap);

//Getting elements from a map
// console.log(myMap.get("three"));


//Map methods
// .set(k,v);
// .get(k_name);
// .delete(k_name);
// .clear();
// .has(k_name);

//Examples
// myMap.set("four", 4);
// console.log(myMap);

// const myElem=myMap.get("four");
// console.log(myElem)

// console.log(myMap.has("four"));

// myMap.delete("four");
// console.log(myMap.has("four"));

// myMap.clear();
// console.log(myMap);

// myMap.forEach(function(val){console.log(val);});

// for(let [k,v] of myMap){
//     console.log(v +" in words is written as "+k);
// }

// function fun(x,y){
//   return "Hello world";
// }
// console.log(fun())

// function getData() {
//   let fname = 'John',
//   lname = 'Rickman',
//   age = '25',
//   occupation = 'Private Employee';
  
//   return [fname, lname, age, occupation];
//   }
//   [fname, lname, age, occupation]=getData();
//   console.log(age)

const myName="Okunzo";
for(let i=myName.length; i<0; i--){
  console.log(myName[i]);
}