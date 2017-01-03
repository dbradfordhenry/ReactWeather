// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Boston', function(err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// }
// getTempPromise('Boston').then(function(temp){
//
// }, function (err){
//
// });
//Challenge area

function addPromise(a, b){
 return new Promise(function (resolve, reject){
   if (typeof a === 'number' && typeof b === 'number'){
     resolve(a+b);
   } else {
     reject('They both need to be numbers!');
   }
 });
}

addPromise(2,4).then(function(sum){
  console.console.log('success', sum);
}, function(err){
  console.console.log('error', err);
});
