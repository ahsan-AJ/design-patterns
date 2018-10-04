var Person = require('./Person');

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    // create a seperate method for each constructor parameter you wish to set
    // and in each method return the THIS object;

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager(hours = 40){
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime(hours = 20) {
        this.hours = hours;
        return this;
    }

    withMoney(money ) {
        this.money = money;
        return this;
    }

    withList(list = []){
        this.shoppingList = list;
        return this;
    }

    // in the build method create the person object by passing the 
    // THIS object in the constructor so that all constructor values of
    // the PERSON class will be inside the this object
    build(){
        return new Person(this);
    }
}
 
module.exports = PersonBuilder;