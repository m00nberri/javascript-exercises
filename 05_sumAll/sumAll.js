const sumAll = function(...minMax) {
    let sum = 0;
    let min = Math.min(...minMax);
    let max = Math.max(...minMax);
    if ((min >= 0) && minMax.every(value => typeof(value) === 'number')) {
        for (i = min; i <= max; i++) {
            sum += i
        };
        return sum
    }
    else {
        return 'ERROR'
    };

};

// Do not edit below this line
module.exports = sumAll;
