console.log('Starting app.js ');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./note.js');
const yargs = require('yargs');
const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if(command === 'add'){
  notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getTitle(argv.title);
} else if (command === 'remove') {
  notes.remTitle(argv.author);
} else {
  console.log('Command not recognized');
}
