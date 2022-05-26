console.log("Guess the secret number between 1 and 10:\n")

function numberGuessing(input) {
    let number = Math.floor(Math.random() * 10 + 1);
    let attempts = 0;
    let guess = Number(input[0]);

    while (attempts < 5) {
        attempts += 1;
    } if (guess < number) {
        console.log("Your guess is smaller than the secret number!")
    } else if (guess > number) {
        console.log("Your guess is greater than the secret number!")
    } else if (guess == number) {
    }

    if (guess == number && attempts > 1) {
        console.log(`You guessed the secret number in ${attempts} tries!`)
    }
    
    if (guess == number && attempts == 1) {
        console.log("You guessed the secret number from the first time!")
    }
    
    console.log(`Game Over! The secret number was ${number}`)    
}

numberGuessing(['7']);
