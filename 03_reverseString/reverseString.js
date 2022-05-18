const reverseString = function(string) {
    let reversedString = string.slice(-1)
    for (let i = 1; i <= string.length; i++) {
        reversedString += string.slice(-i,-(i-1));
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
