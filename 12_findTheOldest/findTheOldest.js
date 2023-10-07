const findTheOldest = function(arr) {
let currentyear = 2023;
let oldest = {};
let oldestAge = 0;
let age = 0;


    for (let c in arr) {
        
        if(arr[c].yearOfDeath){
            age = arr[c].yearOfDeath - arr[c].yearOfBirth;            
        }

        else {
            age = currentyear - arr[c].yearOfBirth;            
        }


        if(age > oldestAge) {
            oldest = arr[c];
            oldestAge = age;           
        }


    }

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
