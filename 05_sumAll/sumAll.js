const sumAll = function(a, b) {

    let num = 0;

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR";
    }
    if(a < b)
        for(let i = a; i <= b;i++)
            num+= i;    
    else if(b < a) 
        for(let i = b; i <= a;i++)
            num+= i;
  
    
return num;

};

// Do not edit below this line
module.exports = sumAll;
