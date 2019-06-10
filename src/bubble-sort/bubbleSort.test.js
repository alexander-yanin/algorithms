const bubbleSort = require('./bubbleSort');


test('sort list', () => {
  expect(bubbleSort([3, 5, 1, 7, 2, 8, 33, 14, 6, 11])).toStrictEqual([ 1, 2, 3, 5, 6, 7, 8, 11, 14, 33 ]);
});

test('sort with negative digits', () => {
  expect(bubbleSort([-2, 2, 8, -33])).toStrictEqual([-33, -2, 2, 8]);
});