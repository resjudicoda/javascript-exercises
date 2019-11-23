const repeatString = function(string, number) {
    
    let repeatedString = '';

    if (number == 0) {
        return '';
    } else if (number < 0) {
        return 'ERROR'
    } else for (let i = 1; i <= number; i++) {
        repeatedString += string
    } return repeatedString;
} 

module.exports = repeatString
