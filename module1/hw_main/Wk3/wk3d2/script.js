/*
 * how could we grab HTML elements in js?
 *
 * we use the document object - the document we're referring to is the HTML document
 * the document object has the DOM. And the DOM is the representation of the HTML elements within JS
 * 
 * we use the methods in the document object to grab elements
*/
const firstListItem = document.getElementById('first-item'); // get elements by HTML ID
const listItems = document.getElementsByClassName('list-item'); // get elements by Class Name. Returns an HTML collection. (not an array)
const querySelectorSecondListItem = document.querySelector('ul > li:nth-child(2)'); // this one is special because you could use any css selector to grab items in js

// how to edit text in HTML from JS
// firstListItem.innerHTML = 'Angel Juarez'; // you could put a normal string to render
// firstListItem.innerHTML = '<h3>Some header content</h3>'; // or you could put more HTML content to render

// how to edit CSS styling from JS
// you could use the style object/property
// firstListItem.style.backgroundColor = 'blue';
// document.body.style.backgroundColor = 'blue';

// console.log(listItems); // console logging the HTML collection
// console.log(listItems[0]) // even though it's an HTML collection I could access the items inside the HTML collection very similarly to an array
// for(let i = 0; i < listItems.length; i++) {
//   const element = listItems[i]; // the element inside the HTML collection
//   element.innerHTML = 'This is bullet point number -> ' + (i + 1);
// }
// listItems.forEach(el => console.log(el)); not going to work because .forEach is a method for an array not an HTML collection

const instructors = [
  {
    firstName: 'Bruce',
    lastName: 'Hawthorn',
    shirtColor: 'Blue',
    position: 'IA'
  },
  {
    firstName: 'Angel',
    lastName: 'Juarez',
    shirtColor: 'Red and black',
    position: 'IL'
  },
  {
    firstName: 'Itzamna',
    lastName: 'Huerta',
    shirtColor: 'white',
    position: 'IA'
  }
];

// I want to add the first name of every instructor to my ul
// in order to do this you have to select the ul
// then you want to add an li to the ul
const unorderedList = document.querySelector('ul');
instructors.forEach(instructor => {
  const newElement = document.createElement('li'); // how you could create an element and use it however you want

  // newElement.innerHTML = instructor.firstName; // once again you could render a simple string

  newElement.innerHTML = `
  <div>
    <h2>Full name: ${instructor.firstName} ${instructor.lastName}</h2>
    <h3>They wear a ${instructor.shirtColor} colored shirt</h3>
    <h4>Their position is ${instructor.position}</h4>
  </div>
  `; // or if you really need to you could programatically render a lot of HTML with special information

  unorderedList.appendChild(newElement);
});

/*
 * DOM event - event listeners
 */
const button = document.getElementById('button');
// syntax element.addEventListener('event-name', callback);
// callback is what you want to happen whenever the event is triggered
// in this case when they click the button
// the callback has to be a function
// button.addEventListener('click', /* do this */);
button.addEventListener('click', () => {
  window.location = 'https://www.google.com/';
});

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'red';
});

/*
 * I want to attach an event listener
 * that when I click on a listitem
 * I could console log the list item I clicked
*/
// I'm going to use the unordered list that we grabbed a few lines above
// and attach an event listener
unorderedList.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.target);
});

// imagine tic-tac-toe
/*
grid.addEventListener('click', (event) => {
  const element = event.target;
  element.innerHtml = playersTurn;
})
*/

// firstSquare.addEventListener('click', () => {
//   // check which players turn it is
//   // fill in the square
// });
// secondSquare.addEventListener('click', () => {
//   // check which players turn it is
//   // fill in the square
// });
// thirdSquare.addEventListener('click', () => {
//   // check which players turn it is
//   // fill in the square
// });

const addListButton = document.getElementById('add-to-list');
// when I click this button I just want to add something to the list. Anything I want
addListButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = `Something added with the button!`;
  unorderedList.appendChild(li);
});

const deleteListButton = document.getElementById('delete-from-list');
deleteListButton.addEventListener('click', () => {
  // delete the element at the bottom of the ul
  // in an array to get the last element you could do array[array.length - 1]
  // in an html collection we have .length so we could also say
  // htmlCollection[htmlCollection.length - 1]
  const idxOfLastChild = unorderedList.childNodes.length - 1; // the reason we say - 1 is because js starts counting from 0
  const lastItem = unorderedList.childNodes[idxOfLastChild];
  unorderedList.removeChild(lastItem);
});