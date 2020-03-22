const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity ||
    (parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15) ||
    isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const ln = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
  const t = Math.ceil(ln / k);

  return t;
};
