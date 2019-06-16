const merge = require('./merge');

function mergeSort(_list) {
  const middle = Math.floor(_list.length / 2);
  let left, right;

  if (_list.length <= 1)
    return _list;

  left = _list.slice(0, middle);
  right = _list.slice(middle);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

module.exports = mergeSort;