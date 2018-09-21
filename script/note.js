console.log('Starting note.js');

module.exports.addNote = () => {
  console.log('addNote');
  return 'Require call was successful';
};

module.exports.addsum = (a,b) => {
  console.log('Adding 2 numbers');
  return a + b ;
}
