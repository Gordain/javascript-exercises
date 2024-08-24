const sumAll = function(a, b) {
    let firstNumber = a;
    let secondNumber = b;
    let sumOfNumbers = 0;
    if(firstNumber < 0 || secondNumber < 0 || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
        return "ERROR";
    }else if(firstNumber > secondNumber){
        for(let i = secondNumber; secondNumber <= firstNumber; i++){
            sumOfNumbers += i;
        }
        return sumOfNumbers;
    }else{
        for(let i = firstNumber; firstNumber <= secondNumber; i++){
            sumOfNumbers += i;
        }
        return sumOfNumbers;
    }

};

// Do not edit below this line
module.exports = sumAll;
