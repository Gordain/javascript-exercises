const reverseString = function(input) {
    let wordToBeReversed = input;
    let stringArray = wordToBeReversed.split("");
    stringArray.reverse();
    let reversedWord = stringArray.join('');
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
