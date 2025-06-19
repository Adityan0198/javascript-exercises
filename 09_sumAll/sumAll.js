const sumAll = function(a, b) {
    if (!(Number.isInteger(a) &&
        Number.isInteger(b) &&
        a>=0 &&
        b>=0
    )) {return "ERROR";}
    let small, big;
    if (a<b) {
        small=a;
        big=b
    }
    else {
        big = a;
        small = b;
    }
    const n = big-small;
    return n*(n+1)/2 + (n+1)*small;
};

// Do not edit below this line
module.exports = sumAll;
