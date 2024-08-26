const leapYears = function(givenYear) {
    let year = givenYear;
    if(Number.isInteger(year/4) && Number.isInteger(year/400)){     // compares if given number is divisble by 4 and 400, for leap year
        return true;
    }else if(Number.isInteger(year/4) && Number.isInteger(year/100)){   //eliminates years divisible by both 4 and 100
        return false;
    }else if(Number.isInteger(year/4)){     //last check for those years that remain, divisible by 4
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
