const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

// var id = '5a6d601233ce9d39939f6ef211';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('\nfind Todos:\n', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('\nfindOne Todo:\n', todo);
// });

// Todo.findById(id)
//   .then((todo) => {
//     if(!todo) {
//       return console.log('Id not found');
//     }
//   console.log('\nfindById Todo:\n', todo);
// }).catch((e) => console.log(e));

var id = '5a6d076c4da6a8ae2f948590';

User.findById(id)
  .then((user) => {
    if(!user) {
      return console.log('\n--WTF...  no user found \n');
    }
    console.log('\n--findById User \n', user);
  }, (e) => {
    console.log('\n--Error retrieving user \n', e)
  });
