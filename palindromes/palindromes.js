const palindromes = function(string) {

    string = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '');
    
    let reversedString = '';
    
    for (let i = 1; i <= string.length; i++) {
        reversedString += string.charAt(string.length - i);   
    } 

    // if (string == reversedString) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    return string == reversedString ? true : false;
} 

module.exports = palindromes
