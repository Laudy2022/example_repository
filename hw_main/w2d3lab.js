// var, let, and const are the keywords we use to create variables
// const is when you don't want a variable to be reassign.
// let is when you want to reassign a variable, but can't be redeclared.
// // let greeting = "hello";
// // let greeting = "say hello again"; <--  will error out
// var is rarely used but they can be redeclared, and is functionally global
// // var greeting2 = "hello";
// // var greeting2 = "say Hello again";

//Primitive types
// let num = 20; // primitive type number. You may use it for loops and calculations
// let flag = true; // primitive type boolean. You use this to trigger something to 
// let nullVar = null; // primitive type null. Null variable is when you want something
// let nope;
// let nada = undefined; // primitive type undefined. Used when a variable doesn't have
// let name = "Joe"; // primitive type string. Used when you need a sewntence or word

// name = 'Angel';
// flag = false;

// console.log(!flag!)

// ! === NOT
// console.log(999 > 999) // T or F? F
// console.log(999 == 999) // T or F? T
// console.log(999 != 999) // T or F? F
// console.log(-5 >= -4) // T or F? F
// console.log(100 <= -100) // T or F? F
// console.log(20 + 5 < 5) // T or F? F
// console.log(81 / 9 == 9) // T or F? T
// console.log(9 != 8 + 1) // T or F? F


// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kelvin';
// const f = false;

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name'); // = means you are assigning a variable, == is saying it is equal, 
//                                 //=== is comparing objects = they are the same.
// console.log(false == 0);
// console.log(a < b < c);
// console.log(a === a < d);
// console.log(e != 'Kevin');
// console.log(48 == '48'); // see line 43
// console.log(f != e)

// charAt()
// concat()
// includes()
// indexOf()
// slice()
// split()
// substring()
// toLowerCase()
// toUpperCase()
// trim()

//toUpperCase() //The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string.
                // const sentence = 'The quick brown fox jumps over the lazy dog.';
                //console.log(sentence.toUpperCase());
                // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

                //from: https://www.w3schools.com/jsref/jsref_touppercase.asp

//substring() // a substring is part of a string- substring() this will return part of the string, and you can specify 
                // whether you want the whole index beginning to an end value, or just the whole index.
                    //Example and added notes from:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
                    //const str = 'Mozilla';
                    // console.log(str.substring(1, 3));
                    // expected output: "oz"
                    // console.log(str.substring(2));
                    // expected output: "zilla"
                    //******substring() extracts characters from indexStart up to but not including indexEnd. In particular:

                        // If indexEnd is omitted, substring() extracts characters to the end of the string.
                        // If indexStart is equal to indexEnd, substring() returns an empty string.
                        // If indexStart is greater than indexEnd, then the effect of substring() is as if the two arguments were swapped; see example below.
                        // Any argument value that is less than 0 or greater than str.length is treated as if it were 0 and str.length, respectively.
                        // Any argument value that is NaN is treated as if it were 0. */

//includes() // includes() ran with string.includes or array.includes() 
            // (as far as my reading is concerned, determines whether a statement
                // is true or false based on a given value being present in the string or array.


            //Example given on  TabNine- https://www.tabnine.com/academy/javascript/how-to-use-the-includes-method-in-javascript/
                // const str = 'This String includes the word includes';
                // console.log(str.includes('includes'));
                // Expected output: true

// let name = 'Kimberlee';
// let faveFood = 'chicken wings'
//let sentence =

//console.log("Hello. My name is " + name + " and my favorite food is " + faveFood) string and catonation
//console.log(name.toUpperCase())

//console.log(`Hello. My name is  ${name} and my favorite food is ${faveFood}`) // template 

/*
null-
undefined-
*/

/////////
//.concat()- merges two arrays, it does not change anything in each array 
//it just combines the two into a new whole

//const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
// .filter()
// .find()

// .forEach() //const array1 = ['a', 'b', 'c'];
    //array1.forEach(element => console.log(element));
        // expected output: "a"
        // expected output: "b"
        // expected output: "c"
// .includes()
// .indexOf()
// .join()
// .map()

// .pop()- removes the last element in an array

// .push() used to add an element at the end of your array
// .reverse()
// .shift()
// .slice()
// .sort()
// .splice()
// .unshift()


////////////////////////////////////////////////////////////////
/////////Create a loop that will print "hi" 15 times.///////////
///////////////////////////////////////////////////////////////

// let result = [];
// const stringToRepeat = 'Hi';
// for(let i = 0; i < 15; i++){
//     result.push(stringToRepeat);
// } (example provided by Carter)



// for(let i = 0; i < 15; i++){
//     console.log('Hi')
// }
// desired result - 15 Hi's = achieved

/////////////////////////////////////////////////////
// Create a loop that will print "YEP!" 30 times.///
///////////////////////////////////////////////////

// for(let i = 0; i < 30; i++){
//         console.log('YEP!')
//      }

// Desired result- YEP! 30 X listed = achieved

/////////////////////////////////////////////////////////////////
// Loop through an array (use both a for loop and a while loop)//
////////////////////////////////////////////////////////////////


////////////////////////////
// Loop from left to right//
///////////////////////////



////////////////////////////
// Loop from right to left//
////////////////////////////



/////////////////////////////////////////////////////////////////////
// Create a loop that logs the EVEN numbers from 98-0 (descending)//
///////////////////////////////////////////////////////////////////
//  for(let i = 98; i >=0; i--) {
//   const isEven = i % 2 === 0;
//   if(isEven) {
//     console.log(i);
//   }
// }
// achieved desired results

///////////////////////////////////////////////////////////////////////////////////////
// Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)///
///////////////////////////////////////////////////////////////////////////////////////
// for(let i = 3; i <= 90; i++) {
//       const multipleOf3 = i % 3 === 0;
//        if(multipleOf3) {
//          console.log(i);
//        }
//      }
// achieved desired results


/////////////////////////////////////////////////////////////////////////////////////
// Create a while loop that'll iterate from both ends of the array at the same time./ 
//And meets in the middle. When it meets in the middle stop the loop.////////////////
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
// Fizzbuzz//////////////////////////////////////////////////////////////////////////////
// Create a loop. That counts from 1-100.////////////////////////////////////////////////
//When you have a number divisible by 3 console.log "Fizz".//////////////////////////////
//When you have a number divisible by 5 console.log "Buzz". /////////////////////////////
//When you have a number divisible by both 5 and 3 console.log "FizzBuzz"////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// for(let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else if (i % 15 == 0) console.log("FizzBuzz");
//     console.log(i);
//   }
// achieved the desired result

////////////////////////////////////////////////////////////////////////////////////////
//Create a conditional that will output the grade of a student according to this image//
//Letter Grade://///////////////////////////////////////////////////////////////////////
// A (91.5-100), A-(88.5-91.5), B+(84.5-88.5), B(81.5-84.5), B-(77.5-81.5)//////////////
//C+(74.5-77.5), C(70.5-74.5), C-(67.5-70.5), D(64.5-67.5), F0-64.5/////////////////////
////////////////////////////////////////////////////////////////////////////////////////
