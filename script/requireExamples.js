console.log('Starting app.js ');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./note.js');
var user = os.userInfo();
console.log(user.username);


const { URL } = require('url');
const myURLs = [new URL('https://www.example.com'),new URL('https://test.example.org'),new URL('https://test.monodev.org')];

console.log(JSON.stringify(myURLs));
// Prints ["https://www.example.com/","https://test.example.org/"]

//fs.appendFile('greetings.txt' , 'Hello World!');
 /*fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
  if (err) {
    console.log('Unable to write file');
  }
});
*/


//Example 2
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
 if (err) {
   console.log('Unable to write file');
 }
});
//fs.appendFileSync('greetings.txt', 'Hello World !');

console.log('Starting app.js ');


const fs = require('fs');
const os = require('os');
const notes = require('./note.js');

var res = notes.addNote();
var sumNumber = notes.addsum(7,6)
console.log(sumNumber);

var res = notes.addNote();
var sumNumber = notes.addsum(7,6)
console.log(sumNumber);
console.log(res);
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
