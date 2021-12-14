//Part 1: Objects
let person = {
    name:'Vero',
    age:35,
}

let object = {
    greeting: "hi, I am an object"
}

console.log(person);

//Only log the value of name using the key name
console.log(person.name);

//Only log age 
console.log(person.age);

//Dot-notation
person.name = 'Vero';
person.age = '35' ;

//Bracket-notation
person['name'] = 'Vero';
person['age'] = 35;

let evaluations = [7, 10, 9];
console.log(evaluations);
//What is its value? [ 7, 10, 9 ]


//Part 2: Arrays
let colors = ['green', 'blue', 'red'];
console.log(colors);

//Log the length of your array to the console
console.log(colors.length);

//Log the first element of your array to the console
console.log(colors[0]);

//Log the last element of your array to the console
let lastItem = colors[colors.length-1];
console.log(lastItem);

//Add a 4th element to your array using the push method: array.push() 
colors.push('yellow');
console.log(colors);

//Now add a digit to your array using the push method.
colors.push(5);

//Finally add an object to your array, again with the push method. 
colors.push(object)
console.log(colors)

//Log Only the greeting from the object (last element of your array), to the console.
console.log(object);

//Part 3: A "real-life" object
//1.Log the name of the last cat breed.
//console.log("name cat breed 3:", catBreeds[2].name )

//2.Log the energy level of the first cat breed.
//console.log("energy level first cat breed":, catBreeds[0].energy_level)

//3. Log the first temperament of the temperaments of the second cat breed.
//console.log("first temperament of the temperaments second cat breed":, catBreeds[1].temperament[1])

//4 Log the last temperament of the temperaments of the third cat breed.
//console.log("last temperament of the temperaments of the third cat breed":, catBreeds[2].temperament[4])

//5.Log the favorite food of the third cat breed
// console.log("Favorite food cat breed 3":, catbreeds[2].food[favoutie_food]) 