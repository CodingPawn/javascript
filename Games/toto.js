// Attempts

var attempts1 = 0;
var attempts2 = 0;

// Guessed_numbers

var guessed_numbers1 = [];
var guessed_numbers2 = [];

// Number

var number1 = Math.floor((Math.random() * 35) + 1);
var number11 = Math.floor((Math.random() * 49) + 1);
var number2 = Math.floor((Math.random() * 35) + 1);
var number22 = Math.floor((Math.random() * 49) + 1);
var number3 = Math.floor((Math.random() * 35) + 1);
var number33 = Math.floor((Math.random() * 49) + 1);
var number4 = Math.floor((Math.random() * 35) + 1);
var number44 = Math.floor((Math.random() * 49) + 1);
var number5 = Math.floor((Math.random() * 35) + 1);
var number55 = Math.floor((Math.random() * 49) + 1);
var number6 = Math.floor((Math.random() * 35) + 1);
var number66 = Math.floor((Math.random() * 49) + 1);

// Game1

console.log("Hello! You have the opportunity to choose between these two games:\nGame1 - Toto 5 out of 35.\nGame2 - Toto 6 out of 49.\nIf you play 'Toto 5 out of 35' and guess the five numbers, you will win $500,000. If you play 'Toto 6 out of 49' and guess the six numbers, you will win $750,000.\nWhich one are you choosing?");

var user_input = prompt("I'm choosing:\n");

while (attempts1 == 5) {
    break;
} if (user_input == "Game1") {
    console.log("Guess the five numbers between 1 and 35:");
} while (attempts1 < 5) {
   guess1 = parseInt(prompt());
   attempts1 += 1;
   if (attempts1 == 5) {
       console.log("Game Over! The five numbers were " + String(number1) + "," + String(number2) + "," + String(number3) + "," + String(number4) + "," + String(number5) + ".")
       console.log("Guessed numbers: " + String(guessed_numbers1))
       console.log("\nThere is one game left: Game2\nTry your luck one more time!\nI'm guessing:");
       break;
   } else if (guess1 == number1) {
       guessed_numbers1.push(number1);
       console.log("You guessed correctly!")
       continue;
   } else if (guess1 == number2) {
        guessed_numbers1.push(number2);
        console.log("You guessed correctly!")
        continue;
   } else if (guess1 == number3) {
        guessed_numbers1.push(number3);
        console.log("You guessed correctly!")
        continue;
   } else if (guess1 == number4) {
        guessed_numbers1.push(number4);
        console.log("You guessed correctly!")
        continue;
   } else if (guess1 == number5) {
        guessed_numbers1.push(number5);
        console.log("You guessed correctly!")
        continue;
   } else if (guessed_numbers1 == [number1, number2, number3, number4, number5]) {
       console.log("Congratulations! You guessed the five numbers! Your prize is: $500,000.");
       break;
   }
}

while (attempts2 == 6) {
    break;
} if (user_input == "Game2") {
    console.log("Guess the six numbers between 1 and 49:");
} while (attempts1 < 6) {
    guess1 = parseInt(prompt());
    attempts1 += 1;
    if (attempts1 == 5) {
        console.log("Game Over! The six numbers were " + String(number11) + "," + String(number22) + "," + String(number33) + "," + String(number44) + "," + String(number55) + String(number66) + ".")
        console.log("Guessed numbers: " + String(guessed_numbers2))
        break;
    } else if (guess2 == number11) {
        guessed_numbers2.push(number11);
        console.log("You guessed correctly!")
        continue;
    } else if (guess2 == number22) {
         guessed_numbers2.push(number22);
         console.log("You guessed correctly!")
         continue;
    } else if (guess2 == number33) {
         guessed_numbers2.push(number33);
         console.log("You guessed correctly!")
         continue;
    } else if (guess2 == number44) {
         guessed_numbers2.push(number44);
         console.log("You guessed correctly!")
         continue;
    } else if (guess2 == number55) {
         guessed_numbers2.push(number55);
         console.log("You guessed correctly!")
         continue;
    } else if (guess2 == number66) {
        guessed_numbers2.push(number66);
        console.log("You guessed correctly!")
    } else if (guessed_numbers2 == [number11, number22, number33, number44, number55, number66]) {
        console.log("Congratulation! You guessed the six numbers! Your prize is: $750,000.");
        break;
    }
 }

 // If 'Game2' has already been chosen first.

 while (attempts1 == 5) {
     break;
 } if (attempts1 == 0 && attempts2 == 6) {
     console.log("There is one game left: Game1\nTry your luck one more time!\nI'm guessing:");
 } while (attempts1 < 5) {
     guess1 == parseInt(prompt());
     attempts1 += 1;
 } if (attempts1 == 5) {
     console.log("Game Over! The five numbers were " + String(number1) + "," + String(number2) + "," + String(number3) + "," + String(number4) + "," + String(number5) + ".");
     console.log("Guessed numbers: " + String(guessed_numbers1));
     console.log("\nGame is Over! You tried your chance!");
     break;
 } else if ( guess1 == number1) {
     guessed_numbers1.push(number1);
     console.log("You guessed correctly!");
     continue;
 } else if ( guess1 == number2) {
    guessed_numbers1.push(number2);
    console.log("You guessed correctly!");
    continue;
} else if ( guess1 == number3) {
    guessed_numbers1.push(number3);
    console.log("You guessed correctly!");
    continue;
} else if ( guess1 == number4) {
    guessed_numbers1.push(number4);
    console.log("You guessed correctly!");
    continue;
} else if ( guess1 == number5) {
    guessed_numbers1.push(number5);
    console.log("You guessed correctly!");
    continue;
} else if (guessed_numbers1 == [number1, number2, number3, number4, number5]) {
    console.log("Congratulations! You guessed the five numbers! Your prize is: $500,000.");
    break;
}

