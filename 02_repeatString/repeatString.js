const repeatString = function(string, num) {
    let text = string;
    let returnText = text;
    if(num == 0){
        return "";
    }else if(num<0){
        return "ERROR";
    }
    for(i = 0; i < num-1; i++){             //iterate through num arguement -1 times, as
        returnText = returnText + text;     //first is already assigned
    };
    return returnText
};

// Do not edit below this line
module.exports = repeatString;
