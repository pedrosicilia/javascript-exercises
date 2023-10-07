const getTheTitles = function(arr) {
let books = [];

for(let c in arr) {
    books.push(arr[c].title);
}

return books;




};

// Do not edit below this line
module.exports = getTheTitles;
