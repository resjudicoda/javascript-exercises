const snakeCase = function(string) {
  
// conditional to check if input has special characters, 
// if not, add spaces at capitals to correct for camelCase

if (string.search(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g) > 0) {
    string = string;
} else {
    string = string.replace(/([A-Z])/g, "_$1");
}

// use corrected string to convert to snake-case

return string
    .replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"_")
    .replace(/ /g, '_')
    .replace(/__+/g, '_')
    .replace(/(^_|_$)/g,'')
    .toLowerCase();

}




module.exports = snakeCase
