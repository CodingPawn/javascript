function countTheVowels(input) {
    userInput = input[0];
    wordLength = userInput.length;
    totalSum = 0;
    for (let x = 0; x < wordLength; x++) {
        if (userInput[x] == 'a' || userInput[x] == 'A') {
            totalSum ++;
        } else if (userInput[x] == 'e' || userInput[x] == 'E') {
            totalSum ++;
        } else if (userInput[x] == 'i' || userInput[x] == 'I') {
            totalSum ++;
        } else if (userInput[x] == 'o' || userInput[x] == 'O') {
            totalSum ++;
        } else if (userInput[x] == 'u' || userInput[x] == 'U') {
            totalSum ++;
        }
    }

    console.log(totalSum);
}

countTheVowels(['qwertyytrewq']);
