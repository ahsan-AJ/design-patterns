var userFactory = require('./userFactory');

// Create users using the user factory function; with optional parameters 
//to determine the type

var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcella', 100 ,'employee', 'This and That');

console.log(alex.toString());
console.log(eve.toString());
