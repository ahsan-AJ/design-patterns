var PersonBuilder = require('./PersonBuilder');

// Employee 
// Chain each builer instantiation with the builder methods and in the end use the build() method


var sue = new PersonBuilder('Sue').makeEmployee().makeManager(50).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers

var charles = new PersonBuilder('Charles')
                .withMoney(50)
                .withList(['jeans', 'sunglasses'])
                .build();
  
var tabitha = new PersonBuilder('Tabitha')
                .withMoney(1000)
                .build();

             
console.log(charles.toString());
console.log(sue.toString());                
