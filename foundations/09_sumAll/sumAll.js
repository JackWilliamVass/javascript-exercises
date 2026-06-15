const sumAll = function(x, y) {
    if (!(Number.isInteger(x))
        || !(Number.isInteger(y))
        || x <= 0
        || y <= 0) 
        {return "ERROR";}
    const sumAllLocal = (a, b) => {
        let total = 0;
        for (let i = a; a <= b; a++) total += a;
        return total;
    }
    return (x > y) ? sumAllLocal(y, x) : sumAllLocal(x, y); 
};

// Do not edit below this line
module.exports = sumAll;
