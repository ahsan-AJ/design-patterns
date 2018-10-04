var Shopper = require('./Shopper');

// create the instance of Shopper
// so any new scout that will be created will have
// these values set by default to avoid code redundancy
// This is a prototype that will be used by all scouts

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;