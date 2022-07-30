//console.log('num')
//const me = ['Kimberlee', 'Latondress', 32];
            // 0            1           3
//console.log(me, [3]) // how can I log my age
// me [2] is very non-descriptive
// console.log(secondPerson [2]);

const descriptiveMe = { firstName: 'Kimberlee' }
console.log(descriptiveMe.firstName);

const car = {
    color: 'blue',
    hp: 4000,
    year: 1989
};
//console.log(car)
//console.log(car.color);

car.accident = true;

console.log(car);

//  can mutate a variable even if their is a constant in front 
//  of it- it does not let you reassign, but it does let you MUTATE


// const name = 'something'; // this line and the one below is an example of reassignment
// name = 'something else'

/*
create an object with these properties
firstName
lastName
age
birthday
favoriteFood
*/

/*
the object could only have unique keys
if you use the same key at any point
the previous key:value pair would be overwritten
*/


const me = { 
    firstName: ['Kimberlee', 'Kim', 'Kiwi']; // you could have arrays as the value
    age: 32,
    height: 5,
    birthday: 'January 19, 1990',
    color: 'gold',
    faveFood: 'chicken_wings' // you could have an entirely 

};

// kimberlee.preferredName = 'Kim';
// kimberlee.firstName = ['Kim', 'Kiwi'];



//console.log(me.faveFood);

//kimberlee.firstName = 'Something else';
//    if(angel.firstNamee === 'Angel') {
//     console.log("You're one cool dude");
// } else  {
//     console.log("I'm sure you have nice qualities");
// }

//if property doesn't exist then put it in
// hash map  - extra reading

