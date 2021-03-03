module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!isValidDate(date)) {
    throw "You provide incorrect argument type!";
  }
  const month = date.getMonth() + 1;

  if (3 <= month && month <= 5) {
    return "spring";
  }

  if (6 <= month && month <= 8) {
    return "summer";
  }

  if (9 <= month && month <= 11) {
    return "fall";
  }

  // Months 12, 01, 02
  return "winter";
};

function isValidDate(date) {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  );
}
