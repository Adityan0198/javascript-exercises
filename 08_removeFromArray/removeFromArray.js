const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);
    return array.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
