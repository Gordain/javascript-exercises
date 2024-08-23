const removeFromArray = function(arrayArgs, ...removeArgs) {    //rest argument to allow undefined number of items to be removed
    let givenArray = arrayArgs;
    let itemsToRemove = removeArgs;
    console.log(itemsToRemove);
    for (let i = givenArray.length -1; i>=0; i--){          //as the length of the array changes from removed items need to loop backwards
        for(let j = 0; j < itemsToRemove.length; j++){
            if(givenArray[i]==itemsToRemove[j]){
                givenArray.splice(i,1);                 //nested loop to iterate through every possible given item to remove
            }
        }
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
