module.exports = function countCats(matrix) {
  return matrix.reduce((total, current) => {
    return total + catsCount(current);
  }, 0);
};

function catsCount(array) {
  return array.reduce((total, item) => total + Number(item === "^^"), 0);
}
