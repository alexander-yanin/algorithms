const merge = require('./merge');

function mergeSortTopDown(list) {
  const middle = Math.floor(list.length / 2);
  let left, right;

  if (list.length <= 1)
    return list;

  left = list.slice(0, middle);
  right = list.slice(middle);

  left = mergeSortTopDown(left);
  right = mergeSortTopDown(right);

  return merge(left, right);
}

module.exports = mergeSortTopDown;