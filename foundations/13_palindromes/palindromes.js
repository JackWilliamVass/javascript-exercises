const alphanumerical = "abcdefghijkmlnopqrstuvwxyz0123456789";

const palindromes = function (string) {
    let stringArr = string.toLowerCase().split('');
    stringArr = stringArr.filter(char => alphanumerical.includes(char));
    return stringArr.toString() === (stringArr.reverse().toString());
};

// Do not edit below this line
module.exports = palindromes;
