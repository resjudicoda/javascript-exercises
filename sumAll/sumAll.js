const sumAll = function(...args) {

    let sum = 0;

    for (let j = 0; j <= args.length; j++) {
         if (typeof args[j] == "object" || typeof args[j] == "string") {
            return "ERROR";
         }
        }
    for (let i = Math.min(...args); i <= Math.max(...args); i++) {
        if (Math.min(...args) < 0) {
            return "ERROR";
            } else sum += Number(i);
    } return sum;

} 

module.exports = sumAll
