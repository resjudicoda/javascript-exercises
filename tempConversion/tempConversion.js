const ftoc = function(...args) {
    let temp = ((args - 32) * (5/9));
    return Number(temp.toFixed(1));
}

const ctof = function(...args) {
    let temp = (args * (9/5) + 32);
    return Number(temp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
