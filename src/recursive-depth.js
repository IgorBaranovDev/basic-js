module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthDefault = 1;
    let countDepth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        countDepth += this.calculateDepth(element);
      }
      if (countDepth > depthDefault) {
        depthDefault = countDepth;
      }
      countDepth = 1;
    });
    return depthDefault;
  }
};
