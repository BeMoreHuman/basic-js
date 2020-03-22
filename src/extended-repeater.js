module.exports = function repeater(str, options) {
    if (!options) {
        return str;
    }
    const repeatTimes = options.repeatTimes;
    const separator = options.separator || '+';
    const addition = String(options.addition);
    const additionRepeatTimes = options.additionRepeatTimes || 0;
    const additionSeparator = options.additionSeparator || '|';
    const base = (options.addition === undefined) ? String(str) : (String(str) + addition);
    let result = base;

    for (let i = 0; i < repeatTimes; i++) {

        for (let k = 1; k < additionRepeatTimes; k++) {
            result += `${additionSeparator}${addition}`;
        }

        if (i !== repeatTimes - 1) {
            result += `${separator}${base}`;   
        }

    }

    return result;
};
  