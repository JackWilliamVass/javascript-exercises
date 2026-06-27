const fibonacci = function(b) {
    let num1 = 1;
    let num2 = 1;

    let a = Number(b);

    if (a === 1 || a === 2) {return num1;}
    if (a === 0) {return 0;}
    else if (a < 0) {return "OOPS";}

    for (let i = 2; i < a; i++) {
        const next = num1 + num2;

        num1 = num2;
        num2 = next;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
