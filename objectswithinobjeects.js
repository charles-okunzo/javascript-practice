// //create objects of cities and countries
// var nbi= {name:'Nairobi'};
// var kis= {name: 'Kisumu'};
// var mbs= {name:'Mombasa'};
// var dar= {name: 'Dar es Salaam'}

// var kenya={name:'Kenya', cities:[nbi,kis,mbs]};
// var tanzania= {name:'Tanzania', cities:[dar]};
// var rw= {name:'Rwanda', cities:[]};
// //list cities in kenya

// kenya.cities.forEach(city=>console.log(`Lets go to ${city.name}`));

// //we can as well push in an already created object

// var kgl='kigali';
// rw.cities.push(kgl);
// console.table(rw.cities);

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// var tomatoes={name:"Tomatoes", price:300};
// var potatoes={name:"Potatoes", price:150};
// var onions={name:"Onions", price:100};

// var groceryStore={name:"Mama's Store", products:[tomatoes,potatoes, onions]};

// var iPhone={name:"iPhone", price:699};
// var Android={name:'Android', price:499};
// var windowsPhone={name:"Windows phone", price:399}
// var phoneStore={name:"RadioShax", products:[iPhone,Android, windowsPhone]};

// var stores=[groceryStore,phoneStore];

// stores.forEach((store)=>{
//   console.log(`${store.name} sells: `)
//   store.products.forEach((product)=>{
//     console.log(product.name)
//   })
// })

// Address book-Business Logic

//contact constructor
function Contact(first, last){
  this.firstName=first;
  this.lastName=last;
  this.addresses=[];
}

//address constructor
function Address(street, city, county){
  this.street=street;
  this.city=city;
  this.county=county;
}

//create two objects

var charlo=new Contact('Charles', 'Okunzo');
var home=new Address('Kenyatta Market', "Nairobi", 'Nairobi');

charlo.addresses.push(home);
console.table(charlo)
