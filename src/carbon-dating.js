const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let activity = +sampleActivity;
  return typeof sampleActivity != 'string' ||
    sampleActivity <= 0 ||
    isNaN(activity) ||
    sampleActivity > MODERN_ACTIVITY
    ? false
    : Math.ceil(
        Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD)
      );
};
