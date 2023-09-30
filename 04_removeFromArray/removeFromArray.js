const removeFromArray = function(arr, ...remove) {

    let newarr = [];

    arr.forEach(i => {
        
        if(!remove.includes(i))
            newarr.push(i);


    });

    return newarr;


};

// Do not edit below this line
module.exports = removeFromArray;
