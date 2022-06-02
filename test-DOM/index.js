const printBox=document.getElementById("print");
printBox.innerHTML="This is a DOM manipulation session";


var submit=document.getElementById("submit");

submit.addEventListener("click", ()=>{
  var userMonth=document.getElementById('enterMonth').value;
  var userDay=document.getElementById('enterDay').value;
  var userName=document.getElementById("enterName").value;

  var userBirthday=new Date(`${userName}-${userMonth}-${userDay}`);
  var userWeekday=userBirthday.getDay();


console.log(userWeekday);

  // var userOutput=document.getElementById("userOutput");
  // userOutput.innerText= "Your name is" + " " + userName;
  
})












// var cars=["volvo", "toyota", "mazda"];
// var cars= new Array("volvo", "toyota", "mazda");

// var cars=Array("volvo", "toyota", "mazda");
// var students=["Joy", "Blaise", "joshua"]
//forEach,.pop, .push, concat,reverse, slice, join,
// console.log(cars.toString());
// console.log(cars.join(","));
// var concatArray=cars.concat(students);
// console.log(concatArray)
// var concatArray=[...cars, ...students];
// console.log(concatArray);

// console.log(concatArray[3]);

// concatArray.forEach(function(car){
//   console.log(car);
// })