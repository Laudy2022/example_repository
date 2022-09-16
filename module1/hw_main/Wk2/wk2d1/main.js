// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }

// /*
// *retun keyword
// *literally returns the result
// */

// function secondSayHello(name) {
//     return `Hello, ${name}`;
// }


// const result = secondSayHello(`Kimberlee`); //=> `Hello, Kimberlee`
// console.log(result);

// //Write a function that adds any two numbers. And return it
// function addTo4() {
//     return 2 +2;
// }

// /*
// *parameters vs argument
// *parameter is the representation of the "special" variable that is the input to a function
// *argument is the specific value you give to the function
// */

// // function addTwoNums(num1, num2) {   //<- parameters
// //     return num1 + num2;
// // }

// // const addition = addTwoNums(100, 1597); //<-arguments
// // console.log(addition);


// function addTwoNums(num1, num2) {   //<- parameters
//     return num1 + num2;
// }

// const addition = addTwoNums(100, 1597); //<-arguments
// console.log(addition);

// function outputArray(array) {  //<- parameter
// console.log(array);
// }
// outputArray([1, 2, 3, 4]);  //<- argument
// outputArray([5, 6, 7, 8]);   //<- argument

// /*
// *scope
// */

// // global scope (below) not in a function, curly brace, etc.- you can use it anywhere in your program
// // bc it's not confined to a particular code block


// /*
// *using a variable before you assign it a `const` or `let` is why you get this error
// *UncaughtReferenceError: can't access lexical declaration 'name' before initiialization
// *can't declare a variable until you're under it
// *Concept: compiled vs interpreted languages - extra reading
// */

// const array = [1, 2, 3];
// const number = 12;
// const name = 'Kimberlee Latondress';

// //   grabOutsideVariable();

// function grabOutsideVariable () {
//     console.log(`hello ${name}`);
// }

// function nestedFunctionParent() {
//     const age = 2000;

//     function nestedFunctionChild() {
//         console.log(age);
//     }
//     nestedFunctionChild();  // run child function
// }

// nestedFunctionParent(); // run parent function
    
/* 
reason for use- big interview question
binary tree
       3
      / \
    5     6
   / \
  7   9
  */ 

//   function maximumSum(tree){
//     const maxSum = -Infinity;
  
//     function traverse(tree, left, right) {
  
//     }
  
//     return maxSum;
//   }

//LAB LAB LAB LAB WK2D1 WK2D1 WK2D1
//#1-#15  1, 5, 9, 13

//~~~#1- Write a JavaScript function to print the “Hello World” message- used in previous assignments- working on concept grasp

// function sayHello(name) {
//      console.log(`Hello, ${name}`);
//  }

// sayHello('World');

 //~~~#5- Write a function to find the area and perimeter of a Circle
        //   A=pi * r squared is how you find the area of a circle, the problem has to be broken down to be understood 
            // found online @ https://developer.mozilla.org 
            // sooooo/\ Math.PI value of pi, courtesy of the above site
            // stackoverflow.com
            

// function areaOfCircle(Math.PI * radius * radius);

// let radius (7);








 //~~~#9- Write a function to calculate simple interest based on the principle amount
// Simple Interest Formulas and Calculations:
// Calculate Total Amount Accrued (Principal + Interest), solve for A. A = P(1 + rt)
// Calculate Principal Amount, solve for P. P = A / (1 + rt)
// Calculate rate of interest in decimal, solve for r. r = (1/t)(A/P - 1)
// Calculate rate of interest in percent. ...
// Calculate time, solve for t.
// found at https://www.calculatorsoup.com/calculators/financial/simple-interest-plus-principal-calculator.php









 //~~~#13- Write a function to add unlimited numbers

