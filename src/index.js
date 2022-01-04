module.exports = function reverse (n) {
  let reversed = number.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(number);
}
console.log(reverse(123));