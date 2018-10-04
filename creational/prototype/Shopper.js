
class Shopper {
    constructor(name = 'unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList;
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    // Clone the class and its properties to any object 
    clone() {
        // get prototype methods and constructor of this class
        var proto = Object.getPrototypeOf(this);
        var cloned = Object.create(proto);
        
        // clone values of the Class by creating copy
        cloned._name = this._name;
        cloned._shoppingList = [...this._shoppingList];

        return cloned;
    }
}

module.exports = Shopper;