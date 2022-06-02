var height1=document.querySelector(".height1");
var width1= document.querySelector(".width1");
var winHeight=window.innerHeight;
var winWidth=window.innerWidth;
var spn=document.getElementById("spn")
window.addEventListener("resize", ()=>{
 
    height1.innerHTML=winHeight;
    width1.innerHTML=winWidth;
})
// window.onclick=()=>{
//     document.body.style.backgroundColor="green"
// }
// var par=document.querySelector("#ptag");
// par.addEventListener("mouseover", ()=>{
//     document.body.style.backgroundColor="green"
//     par.innerHTML=Date();
// })

// var myName= window.prompt("Enter your name");
// while(myName==""){
//     window.prompt("Enter your name");
// }
// spn.innerHTML="Good morning "+myName+ ". Welcome to my page!";
// spn.style.color="white";
// spn.style.backgroundColor="grey"