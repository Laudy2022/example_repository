console.log('Hello, World!');
/*
commenting

*/

/*
primitive data types

The building blocks. Are always here in JS
string
number
null
undefined
boolean
symbol
*/

//strings
console.log('hello');
console.log("hello");
console.log('12345')

//numbers
console.log(12345);

//null && undefined
console.log(null); // like having $0 bank account balance
console.log(undefined); //like having no bank accoubt at all

//boolean - true | false
console.log(true);
console.log(false);

/*
declaring variables

-var => old. You don't generally want to use it
-const => CONSTANT. Meaning the var won't ne reassigned (we'll be using this)
-let => Used when you want var to be reassigned at some point

*/
var firstName = "Kimberlee"
const secondName = "Latondress"
let age = 32;

console.log(firstName); // => Kimberlee
console.log(secondName); // => Latondress
console.log(age); // =>32

console.log(firstName + secondName); // => KimberleeLatondress
console.log(firstName + ' ' + secondName); // => Kimberlee Latondress

/*
string interpolation
You use backticks ->
You put JS expression within ${}
*/

console.log(`Hello, my name is ${firstName}. My favorite number is ${5 + 2}`)
/*
working with booleans

logical operators
&&
||

comparison operators
<
>
<=
>=
== - loosley equals
=== - strictly equals
!= - loosely unequal
!== - strictly unequal
*/
console.log(23<24); // true. Bc 23 is less than 24.
console.log(23>24); // false

console.log(24 >= 25); // false
console.log(24 <=25); // true

//loosely equals - compares value
console.log(24 == 25); // true

// strictly equals - compares value and type
console.log(24 === 25);// false
console.log(24 === 24); // true

console.log(24 !='24'); // false
console.log(24 !==24); // true

console.log(24 !='24');

// if (/* something is true */) {
//    // code block 
// } else {
//    // code block
// }

const randomConditional = false;
// if(number > 0) {
//    console.log('the number is positive');
// }
//
// if(number < 0) {
// }
const number = 0; // how could we check if the num is neg or pos

if(number > 0) {
console.log('the number is negative');
}

if(number < 0) {
    console.log('the number is negative');
}
if(number > 0) {
    console.log('The number is positive');
    } else {
        console.log('The number is negative');
    }

    const securityAge = 17;
if(securityAge >= 18) {
    console.log('You have access');
} else {
    console.log('You have been denied access');
}


// if(randomConditional) {
// console.log('Hello);
// } else {
// console.log('goodbye);
// }

// const grade= 93


// if(grade >= 90) {
// console.log("A")

// } else if(grade >= 80) {
//     console.log("B")

// }else if(grade >= 70){
//     console.log("C")

// } else if(grade >= 55){
//     console.log("D")
// } else {
//     console.log("F")
// }

