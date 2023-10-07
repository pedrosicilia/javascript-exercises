const palindromes = function (string) {

string = string.replace(/[,.!? ]/g, "").toLowerCase();
let length = string.length-1;

for (const c of string) {
   // console.log(`Checking ${c}    with    ${string[length]}`)
    if(c != string[length])
        return false;

    length--;    
}
return true;

};

// Do not edit below this line
module.exports = palindromes;
