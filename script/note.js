console.log('Starting note.js');

/*
module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note ';
};
*/
var addNote = (title,body) => {
console.log('Adding note' , title, body);
};

var getAll = () => {
  console.log('Gettting all notes');
}

var getTitle = (title) => {
  console.log('Getting title:', title);
}

var remTitle = (body) => {
  console.log('Removing Title from Note: ', body);
}
module.exports = {
  addNote,
  getAll,
  getTitle,
  remTitle
};
