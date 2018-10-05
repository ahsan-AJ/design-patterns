var localStorage = require('./localStorage');

console.log('localstorage length: ', localStorage.length);

var uid = localStorage.getItem('user_id');
console.log('user_id', uid);

if (!uid) {
    console.log('User not found, Setting the user id and token');
    localStorage.setItem('token', 'TJVAEDFSDARKLNGDLKN');
    localStorage.setItem('user_id', '12345');
} else {
    console.log('USER ID FOUND ', uid);
    console.log('clearing the user id');
    localStorage.clear();

}