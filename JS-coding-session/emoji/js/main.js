// console.log(typeof('Hello'))

let btn= document.getElementById('click')
let body = document.querySelector('body');
let colors= ['red', 'green', 'yellow', 'blue', 'purple', 'cyan', 'magenta','black', 'pink', 'grey']
let header= document.querySelector('#header')

btn.onclick= ()=>{
  // alert('Hi')

  // body.classList.toggle('bg')

  let random= Math.floor(Math.random()*colors.length);
  body.style.backgroundColor= colors[random];
  // header.style.color= colors[random];


}

console.log("%cHello World", "background:linear-gradient(to bottom, blue, red);color:white;padding:10px;")