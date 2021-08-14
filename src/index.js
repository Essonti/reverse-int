module.exports = function reverse (n) {    
    let result = '';
    n = Math.abs(n);
    while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
    }
    return +result;        
}
