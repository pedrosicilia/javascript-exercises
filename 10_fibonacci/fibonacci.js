const fibonacci = function(i) {


  if(i < 0) return "OOPS"; 

  if(i === 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;
  
  for (let c = 2; c <= i; c++) {
      let current = firstPrev + secondPrev;
      secondPrev = firstPrev;
      firstPrev = current;
  }

  return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
