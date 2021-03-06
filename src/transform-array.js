module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw "You must provide an array!";
  }
  if (!array.length) {
    return [];
  }
  const controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  if (array.findIndex((item) => controls.some((el) => el === item)) === -1) {
    return array;
  }
  let result = array
    .map((item) => {
      const isAction = isControl(item, controls);
      return {
        value: item,
        remove: isAction,
        ...(isAction && { control: item }),
      };
    })
    .reduce((result, currentItem, currentIdx, initialArr) => {
      if (currentItem.control) {
        switch (currentItem.control) {
          case "--discard-prev":
            if (result[result.length - 1]) {
              result.length = result.length >= 1 ? result.length - 1 : 1;
            }
            return result;
          case "--discard-next":
            if (initialArr[currentIdx + 1]) {
              initialArr[currentIdx + 1].remove = true;
            }
            return result;
          case "--double-prev":
            if (initialArr[currentIdx - 1]) {
              const elem = { ...initialArr[currentIdx - 1] };
              elem.remove = false;
              result = [...result, elem];
            }
            return result;
          case "--double-next":
            if (initialArr[currentIdx + 1]) {
              result = [...result, initialArr[currentIdx + 1]];
            }
            return result;
        }
      } else {
        return currentItem.remove
          ? result
          : (result = [...result, currentItem]);
      }
    }, [])
    .filter((el) => !el.remove)
    .map((el) => el.value);

  return result;
};

function isControl(value, controls) {
  return controls.some((el) => el === value);
}
