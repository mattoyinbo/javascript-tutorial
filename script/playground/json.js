/*var obj = {
  Name : 'Matthew',
  Title : 'Growing Up',
  Author: 'Oyinbo',
  Year: 2018
};
var stringObj =  JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

// var personString = '{"name": "Matthew","age": 27}';
// personJson = JSON.parse(personString);
// console.log(typeof personJson);
// console.log(personJson);
const fs = require('fs');

var originalNote = {
  title: 'Hello World',
  body : 'Some body',
  age:27,
  Author: 'Matthew Oyinbo'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
console.log(note.body);
