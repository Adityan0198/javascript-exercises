const repeatString = function(string, times) {
    if (times<0) {return "ERROR";}
    let repeatedStr = '';
    for (let i=0; i<times; i++) {
        repeatedStr+=string;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
