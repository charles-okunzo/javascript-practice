//Strings, Numbers,Arrays,Booleans

// var myName="Charles";

//literal notation

// let studentInfo={
//   name:'Pauline',
//   age:16,
//   address:'418 Kijabe street'
// }
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//constructor

//constructor function

// function Plastic(name, color, material){
//   this.name=name;
//   this.color=color;
//   this.material=material;
// }

//prototype
// Plastic.prototype.displayNameColor= function(){
//   return console.log(this.name +" "+ this.color + " " + this.material);
// }


// var plasicCup= new Plastic('mug', 'red', 'PVC');

// console.table(plasicCup);

// console.log(plasicCup.name);

// var plasticPlate= new Plastic('Bowl', 'Blues');

// console.log(plasticPlate)

// let subMitBtn=document.getElementById("submitBtn");

// subMitBtn.addEventListener('click', (e)=>{
//   let pName=document.getElementById('pName').value;
//   let pColor=document.getElementById('pColor').value;
//   let pMaterial= document.getElementById('pMaterial').value;

//   var userPlastic= new Plastic(pName, pColor, pMaterial);
  // console.log(`${userPlastic.name} ${userPlastic.color} ${userPlastic.material} `)

  // userPlastic.displayNameColor();

  //  console.table(userPlastic);




//     e.preventDefault();
// })

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//constructor
// function Pizza(size, toppings, numberOfPizzas){
//   this.size=size;
//   this.toppings=toppings;
//   this.numberOfPizzas= numberOfPizzas;
// }


// let submitBtn=document.getElementById('submitBtn');

// submitBtn.addEventListener('click', (e)=>{
//   e.preventDefault();
//   var inputSize=parseInt(document.form.pizza.value);
//   var inputToppings= parseInt(document.form.toppings.value);
//   var numberOfPizzas=parseInt(document.getElementById('pizza-number').value);

//   var userPizzaOrder= new Pizza(inputSize, inputToppings, numberOfPizzas);
  

// //prototype

//   Pizza.prototype.calculateTAmt= function (inputSize, inputToppings, numberOfPizzas){

//   return (inputSize + inputToppings)* numberOfPizzas;

// }


//   alert(`Your total cost is $${userPizzaOrder.calculateTAmt(inputSize, inputToppings, numberOfPizzas)}`)
// })

// var userPizzaOrder= new Pizza(inputSize, inputToppings);


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//constructor

// function Pizza(size, crust, toppings, nOfPizza){
//   this.size=size;
//   this.crust=crust;
//   this.toppings=toppings;
//   this.nOfPizza=nOfPizza;
// }


// var inputSize=parseInt(document.getElementById('Size').value);
// var inpuCrust=parseInt(document.getElementById('Crust').value);
// var inputToppings=document.querySelectorAll(".toppingz").checked;

// // console.log(inputToppings)

// let submitBtn=document.querySelector('#submitBtn');

// submitBtn.addEventListener('click', (e)=>{
//   e.preventDefault()
//   console.log(inpuCrust);
// })

$(()=>{
  // $('.main-form').submit(()=>{
    
  // })

  $("input:checkbox").change((e)=>{

    var arr=[];
    e.preventDefault();
    var toppingsVal=parseInt($("input:checkbox:checked").val());
  

    $.each($("input[type=checkbox]:checked"),function(){
      arr.push(parseInt($(this).val()));

   })
  //  console.log(arr);
   let count=0;
   arr.forEach((elem)=>{
     count+=1;
     return console.log(count);

     
 

   
  })
  $("button.addPizza").click(function(){
    let pName = $(".name option:selected").val();
    let pSize = $("#size option:selected").val();
    let pCrust = $("#crust option:selected").val();
    let pTopping = []; 

    switch(pSize){
      case "0":
        price= 0;
        break;
      case 'large':
        price = 1500;
        break;
      case "medium":
        price = 950;
        break;
      case "small":
        price = 700;
      default:
        console.log("error")

 }})

  $("button.addPizza").click(function(){
    let pName = $(".name option:selected").val();
    let pSize = $("#size option:selected").val();
    let pCrust = $("#crust option:selected").val();
    let pTopping = []; 

    switch(pSize){
      case "0":
        price= 0;
        break;
      case 'large':
        price = 1500;
        break;
      case "medium":
        price = 950;
        break;
      case "small":
        price = 700;
      default:
        console.log("error")

    }
})})})