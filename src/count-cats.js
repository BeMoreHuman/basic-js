module.exports = function countCats(matrix) {
  let result = 0;

  matrix.forEach(innerArr => {
    innerArr.forEach(item => {
      result += Number(item === '^^');
    });
  });

  return result;
};
