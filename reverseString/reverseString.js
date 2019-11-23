const reverseString = function(string) {

    let returnedString = '';

    for (let i = 1; i <= string.length; i++) {
        returnedString += string.charAt(string.length - i);
    } return returnedString;

}

module.exports = reverseString
