console.log('Starting app.js ');


const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./note.js');

//var res = notes.addNote();
//var sumNumber = notes.addsum(7,6)
//console.log(sumNumber);
var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4,5]);
console.log(filteredArray);
console.log(_.isString('Andrew'));


// var user = os.userInfo();
// console.log(user.username);
//
// fs.appendFile('greetings.txt', `Hello ${user.username}!  You are ${notes.age}`, function (err) {
//  if (err) {
//    console.log('Unable to write file');
//  }
// });
