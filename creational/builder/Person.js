class Person {

    // call the constructor with only one object having all the components of 
    // the person's constructor;
    constructor(builder) {

            this.name = builder.name;
            this.isEmployee = builder.isEmployee;
            this.isManager = builder.isManager;
            this.hours = builder.hours || 0;
            this.money = builder.money || 0;
            this.shoppingList = builder.shoppingList || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;