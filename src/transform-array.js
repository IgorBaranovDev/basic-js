module.exports = function transform(arr) {
  const arrLength = arr.length;
  const transformArr = [];
  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return [];

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === `--discard-next`) {
      if (i < arrLength - 1) i++;
    } else if (arr[i] === `--discard-prev`) {
      if (transformArr.length > 0) transformArr.pop();
    } else if (arr[i] === `--double-next`) {
      if (i < arrLength - 1) transformArr.push(arr[i + 1]);
    } else if (arr[i] === `--double-prev`) {
      if (i > 0) transformArr.push(arr[i - 1]);
    }
  }
  return transformArr;
};
