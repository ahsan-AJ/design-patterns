var logger = require('./Logger');
var Shopper = require('./Shopper');
var Store = require('./Store');

logger.log('Starting app...');

var alex = new Shopper('alex', 500);
var ski_shop = new Store('Steep and deep supplies', [
    {
        item : 'Downhill Skis',
        qty : 6,
        price : 560
    },
    {
        item : 'Knit Hat',
        qty : 20,
        price : 160
    }
])

logger.log('finished logging...');

console.log(`${logger.count} logs`);
logger.logs.map( log => console.log(`   ${log.message}`));