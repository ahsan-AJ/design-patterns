var Employee = require('./Employee');
var Shopper = require('./Shopper');

// the user factory will take each type of user and instantiate a new object 
// based on certain parameters (in this case the user type).

var userFactory = (name, money=0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name,money,employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;