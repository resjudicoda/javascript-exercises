const removeFromArray = function(array, number) {

    for (let i = 0; i <= array.length; i++) {
        if (array[i] == number) {
            array.splice(i, 1);
        }
    } return array;
}

module.exports = removeFromArray
