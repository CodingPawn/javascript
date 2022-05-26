function numberMatching(input) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    let number = Number(input[0]);

    if (randomNumber == number) {
        console.log(randomNumber);
        console.log("The number matches!");
    } else {
        console.log(randomNumber);
        console.log("The number doesn't match!")
    }
}

numberMatching(['5']);
