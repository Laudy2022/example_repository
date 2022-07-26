// console.log('This is the loops file');
// /*
// /*
// loops
// for loops
// while loops
// for each
// for in
// do while
// */
// /*
// for loop structure

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }
// for(variable creation; conditional; incrementer/decrement) {
//   code block
//   body of the for loop
// }
// */
// // for(let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // start at 10. Stop at 1
// // for(let i = 10; i > 0; i--) {
// //   console.log(i);
// // }
// /*
// write 2 for loops
// 1. for odd numbers up to 9
//   1
//   3
//   5
//   7
//   9
// 2. for even numbers up to 10
//   2
//   4
//   6
//   8
//   10
// */
// // for(let i = 1; i < 10; i++) {
// //   // % - (modulo) gives the remainder
// //   const isOdd = i % 2 === 1;
// //   if(isOdd) {
// //     console.log(i);
// //   }
// // }

// // for(let i = 1; i < 10; i += 2) {
// //   console.log(i);
// // }

// // 2, 4, 6, 8, 10
// // for(let i = 2; i <= 10; i += 2) {
// //   console.log(i);
// // }
// for(let i = 1; i <= 10; i++) {
//   const isEven = i % 2 === 0;
//   if(isEven) {
//     console.log(i);
//   }
// }

// for(let i = 3; i <= 60; i++) {
//   const multipleOf3 = i % 3 === 0;
//   if(multipleOf3) {
//     console.log(i);
//   }
// }

// const array = [1, 2, 3, 4, 5, 6];
// const names = ['angel', 'bruce', 'leo']; // => names.length = 3
//               // 0         1       2     <- these are indixes
// const randomStuff = [1, 'angel', null, 'something else'];

// console.log(names); // => ['angel', 'bruce', 'leo']
// // if you want to use an index you use the name of the array and square brackets with the index number in it

// // you could use a for loop to loop over an array
// const movies = ['inception', 'limitless', 'whiplash', 'burnt', 'Spider-Man']; // length = 5
//               //    0            1            2          3           4       <- indixes
// // console.log(movies.length); // => 5
// movies.push('Spider-Man: No Way Home'); // <-- push inserts the element into the end of the array
// // console.log(movies.length); // => 6
// const lastIdx = movies.length - 1; // gives you the last idx of array
// // console.log(movies[lastIdx]);
// /*
// array methods
// .push(elem) -> adds it to the array
// */
// // for(let i = 0; i < movies.length; i++) {
// //   console.log(i);
// //   console.log(movies[i]);
// // }
// movies.pop(); // <-- pop removes an element from the end of the array

// // movie is kind of like movies[i]
// // when we console.log(movie) it's like saying console.log(movies[i])
// movies.forEach(movie => console.log(movie));



// let num = 0;
// while(num < 10) {
//     console.log(num);
//     num++;
// }
// /*
// 0-9
// */

// /*
// LinkedList
// value pointing to the next
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// */
// /*class LinkedList {
//     constructor(value, next = null) {
//       this.value = value;
//       this.next = next;
//     }
//   }
//   // 1 -> 2 -> 3 -> 4 -> null
//   const list = new LinkedList(1, new LinkedList(2, new LinkedList(3, new LinkedList(4))));
//   let currentNode = list;
//   while(currentNode !== null) {
//     console.log(currentNode.value, 'currentNode.value');
//     currentNode = currentNode.next;
//   }
// */


// let i = 0
// while(i <= 35){
//     if(i % 3 == 0 ){
//         console.log(i);
//     }
//     i++}

//for(let i = 0; i <= 35; i++);
   
 
/*
0-35
?
*/


// let i = 0
// while(i <= 100){
//     if(i % 5 == 0 ){
//         console.log(i);
//     }
//     i++}


//     let i = 0
// while(i <= 100){
//     if(i % 5 == 0 ){
//         console.log(i);
//     }
//     i+= 5}

// let i = 0
// while(i <= 20){
//     if(i % 2 == 0 ){
//         console.log(i, 'before');
//         console.log(i * 3, 'after');
//     }
//     i++}
// got isPrime frm StackSkills


    // const isPrime = num => {
    //     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    //     if(num % i === 0) return false;
    //     return num > 1;
    // }

    // idx = 0;
    // while(idx <= 20) {
    //     if(idx === 0) {
    //         console.log(idx);
    //     } else if(idx === 2){
    //         console.log(idx);
    //     }
    // }

