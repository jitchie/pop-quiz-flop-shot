//question
// var words = ['JavaScript!', 'in', 'backwards', 'loop', 'can', 'i'];

// for (var i = 0; i< words.length; i++){
//   console.log(words[i]);
// };

/* JavaScript!
in
backwards
loop
can
i

make loop run backwards.
*/
//answer

var words = ['JavaScript!', 'in', 'backwards', 'loop', 'can', 'i'];

for (var i =  words.length-1; i>= 0; i--){
  console.log(words[i]);
};

//set variable to length of array
//minus one as arrays are zero based indexed.
//while i is greater than or equal to 0
// depreciate the initial value of i (assigned as the length of inital array)
//log each index throughout the loop words[i]