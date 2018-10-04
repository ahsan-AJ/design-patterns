class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} - ${message}`);
    }

}

// To create a singleton

/* approach 1: Create a Singleton Class with a get instance method

class Singleton {
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;
*/


// approach 2: On module exports, return the instantiated Logger instance - easier
module.exports = new Logger();