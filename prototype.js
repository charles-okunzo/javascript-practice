function Human(eyes, feet, bloodColor, height, race){
  this.eyes=eyes;
  this.feet= feet;
  this.bloodColor=bloodColor;
  this.height=height;
  this.race=race;
}


// var indian= new Human('brown');
// console.log(indian.eyes)

// var myName= new String('Charles');

// Human.prototype.dressing= ()=>{
//   return this.indian+ " trausers and skirts"
// }




// console.log(indian.dressing());





var african= new Human('brown', true, 'red', 170, 'black');

console.log(african.race);

Human.prototype.calculateInMeters= function (){
  return (this.height) /100+ 'm';
}

console.log(african.calculateInMeters());

// var african = new Human(200,'black');
// Human.prototype.calcMtrs = function() {
//     return (this.height*2).toString()
// }
// console.log(african.calcMtrs());

