module.exports = function reverse(n) {
  let reversed = parseInt(n.toString().split("").reverse().join(""));
  return reversed;
}

