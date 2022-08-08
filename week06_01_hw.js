// // Scenario 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

//Comment 
// "The murder is" prints out:
// The murderer is Miss Scarlet.


// // Scenario 2
// const murderer = 'Professor Plum';


// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }


// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// //Comment 
// // changeMurderer can't be reassigned so Mrs Peacock can't be the new murder


// // Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// //Comment
// //it prints out 
// // First Verdict:  The murderer is Mrs. Peacock.
// // Second Verdict:  The murderer is Professor Plum
// // Prof. Plum is the third one as it is outside the block const function



// // Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// // console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// //Comment
// //it prints out 
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. 
//(Mrs Peacock has been reassigned with Colonel Mustard)
// Suspect three is Mrs. Peacock. 
//(because it belongs to the outside let function)


// // Episode 5
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// // changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// // comment
// // it prints out The weapon is the Revolver because we are calling changeWeapon as Revolver. If we didn't pass 'Revolver' it would not affect the first cont scenario


// // Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);




// // comment
// it prints out The murderer is Mrs. White as it is within the changeMurderer block function for plottwist
