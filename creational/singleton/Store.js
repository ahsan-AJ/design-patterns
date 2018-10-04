// var Logger = require('./Logger');


// using approach 1 : call logger.getInstance methods on instantiating to check if logger
// instance is already made

// var logger = new Logger().getInstance();

// using approach 2: Call logger object which is already instantiated on require
var logger = require('./Logger');

class Store {
    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

module.exports = Store;