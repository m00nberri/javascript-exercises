const removeFromArray = function(array, ...trash) {
    return array.filter(value => !trash.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
