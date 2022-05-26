
// Building Object, Bracket Notation, Variables


// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// };

// var nameValue = ourDog.name;
// var legsValue = ourDog.legs;
// var tailsValue = ourDog.tails;
// var friendsValue = ourDog.friends;

// console.log(nameValue, legsValue, tailsValue, friendsValue);

// var nameValue = ourDog["name"];
// var legsValue = ourDog["legs"];
// var tailsValue = ourDog["tails"];
// var friendsValue = ourDog["friends"];
// console.log(nameValue);
// console.log(legsValue);
// console.log(tailsValue);
// console.log(friendsValue);

// Dot Notation

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];

// console.log(player);


// Updating Project Properties

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// ourDog.name = "Happy Camper";

// console.log(ourDog.name);


// Add New Properties to Object


// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// ourDog.bark = "bow-wow";

// var myDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"]
// };

// myDog["bark"] = "woof!";

// console.log(myDog["bark"])


// Delete Properties From an Object

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"],
//     "bark": "bow-wow"
// };

// delete ourDog.bark;

// var myDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything"],
//     "bark": "woof"
// };

// delete myDog.tails;

// console.log(ourDog);
// console.log(myDog);