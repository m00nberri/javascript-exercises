const repeatString = function(string,num) {
    if (num < 0) {
        return `ERROR`
    }

    let text = ``
    for (let i = 1; i<=num; i++) {
        text += string;
    }
    
    return text;
};

// Do not edit below this line
module.exports = repeatString;
