const fibonacci = function(n) {
    if (typeof n == 'string') {
        n = Number(n);
    } 
    
    let sequence = [1, 1, 2, 3];

    if (n < 0) {
        return "OOPS";
    } else if (n <= 4) {
        return sequence[n-1];
    } else for (let i = 4; i <= (n-1); i++) {
        let c = 0;

        c = (sequence[(i-1)] + sequence[i-2]);
        sequence.push(c);
        
    } return sequence[n-1];
}

// 1  2  3   4  5  6

// [1, 1, 2, 3, 5, 8]

// 0   1  2  3  4  5

module.exports = fibonacci
