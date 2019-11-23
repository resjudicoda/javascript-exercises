const leapYears = function(...args) {
    if (args % 4 !== 0) {
        return false;
    }
    
    if (args % 4 == 0 && args % 100 !== 0) {
        return true;
    }
    
    if (args % 4 == 0 && args % 100 == 0 && args % 400 == 0) {
        return true;
    }

    if (args % 100 == 0 && args % 400 !== 0) {
        return false;
    }
}

module.exports = leapYears
