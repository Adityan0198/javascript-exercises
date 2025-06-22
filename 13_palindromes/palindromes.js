const palindromes = function (string) {
    let array = string.toUpperCase().split('');
    letters = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    array = array.filter(char => letters.includes(char));
    const halfSize = array.length/2;
    for(let i = 0; i<=halfSize; i++){
        if (array[i]!==array[array.length-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
