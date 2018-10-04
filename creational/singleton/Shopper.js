// var Logger = require('./Logger');


// using approach 1 : call logger.getInstance methods on instantiating to check if logger
// instance is already made

// var logger = new Logger().getInstance();

// using approach 2: Call logger object which is already instantiated on require
var logger = require('./Logger');


class Shopper {
    constructor(name, money = 0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account`);
    }


}

module.exports = Shopper;