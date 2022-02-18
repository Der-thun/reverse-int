module.exports = function reverse (n) {
    let temp = String(Math.abs(n)).split("");
    temp = temp.reverse();
    temp = temp.join("");
    return +temp;
}
