module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    while (arr.length) {
      depth++;
      arr = arr.reduce((level, item) => {
        if (Array.isArray(item)) {
          if (item.length === 0) {
            item = 1;
          }
          level.push(item);
        }
        return level;
      }, []);
    }
    return depth;
  }
};
