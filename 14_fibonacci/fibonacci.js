const fibonacci = function(n) {
    if (n<0) {return "OOPS";}
    let curr=0;
    let next=1;
    for (let i=0; i<n; i++){
        const temp = curr+next;
        curr = next;
        next = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
