// // always capitalize the first letter of a class
// // that is what indicates to the developer it's a class
// // developers when they see a capital name think of a class
// class Vehicle { // defining a class
//     constructor(colorParam, numberOfTiresParam, yearParam) { // constructor is a special function to add info to your class/object instantiaion
//       this.objectColor = colorParam;
//       this.objectNumberOfTires = numberOfTiresParam;
//       this.objectYear = yearParam;
//     }
//   }
  
//   // use a class || instantiate an object
//   // instantiate object = create object from class
//   // use new keyword
//   const v1 = new Vehicle('red', 4, '2020');
//   console.log(v1);
  
//   const v2 = new Vehicle('blue', 2, '2000');
//   console.log(v2);
  
//   /*
//   creating a class for a human
  
//   hair color
//   eye color
//   height
//   age
//   name
//   */
//   class Human {
//     constructor(eyeColor, hairColor, height, age, name) 
//  {
//       constructor method that accepts params
//       this.eyeColor = eyeColor;
//       this.hairColor = hairColor;
//       this.height = height;
//       this.age = age;
//       this.name = name;
//     }
//     // this is a method. It's like a function. 
//          But specifically inside of a class
//     // you could take params with a method too. But in here 
//          we're choosing not to
//     introduction() {
//       // 'this' represents the entirety of the object
//       console.log('Hello! My name is ' + this.name);
//     }
  
//     // getters and setters
//     getEyeColor() {
//       return this.eyeColor;
//     }
  
//     setEyeColor(eyeColor) {
//       this.eyeColor = eyeColor;
//     }
  
//     getHairColor() {
//       return this.hairColor;
//     }
  
//     setHairColor(hairColor) {
//       this.hairColor = hairColor;
//     }
//   }
  
//   const person = new Human('Green', 'Blonde', 5, 30, 'June');
//   const person1 = new Human('Blue', 'black', 6, 23, 'Jacob');
//   // console.log(person);
  
//   person.introduction(); // => 'Hello! My name is ' + June
//   person1.introduction(); // => 'Hello! My name is ' + Jacob
  
//   /*
//   {
//     'brown'
//     'brown'
//     "6'11"
//     27
//     'bruce'
//   }
//   */
  
  class Gladiator {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
  }
  
  const testGladiator = new Gladiator('Angel', 'Spear');
  console.log(testGladiator);