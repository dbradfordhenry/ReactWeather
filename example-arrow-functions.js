 // var names = ['Derrick', 'Michel', 'Samantha', 'Jens', 'Pat'];
//
// names.forEach(function (name){
//   console.log('forEach', name);
// });
//
// names.forEach((name)=>{
//   console.log('fromArrow', name)
// });
//
// names.forEach((name) => console.console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Derrick'));

// var person = {
//   name: 'Derrick',
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
//Challenge area

function add(a, b){
  return a + b;
}

//addStatement
var statement = (a, b) => {
  return a + b;
}
console.log(statement(4, 11));
//addExpression

var addExpression = (a,  b) => a + b;
console.log(addExpression(4,12));
