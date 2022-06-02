
// var inputElement= document.getElementById("MyName");



// inputElement.addEventListener("keyup", ()=>{
//   // var getData=document.form.myName.value;
//   var getData=document.getElementById("MyName").value;

//   var printUpperCase=document.getElementById("uppercase");

//   printUpperCase.textContent=getData;


// })

// var value1=document.form.gender.value;



// var submit= document.getElementById("submit");

// submit.onclick=()=>{
 

  // var value= document.form.gender.value;

//  if(value==""){
//    alert("Select gender")
//  }else{
//   if(value=="male"){
//     alert("You have selected Male");
//     }
//   else{
//     alert("You have selected Female");
//   }
//  }
// }


var submit= document.getElementById("submit");

submit.onclick=()=>{
  var printDate=document.getElementById("uppercase");
  var gender= document.form.gender.value;

  // var getMyBirthday=document.form.myBirthday.value;

  const getMyBirthday= document.getElementById("my-date").value;

  var myDate= new Date(getMyBirthday);

  var myDay=  myDate.getDay();

  var maleAkanNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  var femaleAkanNames=["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

  // if(gender===""){
  //   alert("Select gender");
  // }else if(getMyBirthday===""){
  //   alert("Enter Your Birthday")
  // } else{
  //   if(gender==="male"){
  //     printDate.innerHTML= `Hi your Akan name is ${maleAkanNames[myDay]}`;
  //   } else{
  //     printDate.innerHTML= `Hi your Akan name is ${femaleAkanNames[myDay]}`;
  //   }
  // };


  gender===""? alert("Select Gender"): getMyBirthday===""? alert("Enter Your Birthday"): 
    gender==="male"?printDate.innerHTML= `Hi your Akan name is ${maleAkanNames[myDay]}`:printDate.innerHTML= `Hi your Akan name is ${femaleAkanNames[myDay]}`;
  
  


}





// var date=new Date();
// console.log(date.toString());
// console.log(date.toDateString());

//new Date();
  //new Date("YYYY-MM-DD")
  //new Date("YYYY-MM-DDTHH:MM:SS")


  //calculating age with birthday
  // var currentDate= new Date();
  // var hisBirthday= document.getElementById("my-date").value;
  //   var SomeonesBirthday= new Date(hisBirthday);
  
  //   var difference= currentDate-SomeonesBirthday;
    
  //   const yearInMils=31556926000; 
  //   var myAge= difference/yearInMils;
    
  //   console.log(myAge.toFixed(0));
  // printDate.innerHTML= `Hi you were born on ${dayArray[myDay]}`;
  // console.log(myDate)