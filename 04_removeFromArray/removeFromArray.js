const removeFromArray = function(arrayArgs, ...removeArgs) {    //rest argument to allow undefined number of items to be removed
    let givenArray = arrayArgs;
    let itemsToRemove = removeArgs;
    for (let i = 0; i < givenArray.length; i++){
        for(let j = 0; j < itemsToRemove.length; j++){
            if(givenArray[i]==itemsToRemove[j]){
                givenArray.splice(i,1);
            }
        }
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
