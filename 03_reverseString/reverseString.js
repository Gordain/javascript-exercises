const reverseString = function(input) {
    let wordToBeReversed = input;
    let stringArray = wordToBeReversed.split("");
    stringArray.reverse();
    let reversedWordcommas = stringArray.toString();
    let reversedWord = reversedWordcommas.replace(/,/g, '');
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
