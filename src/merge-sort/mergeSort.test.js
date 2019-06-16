const mergeSortTopDown = require('./mergeSortTopDown');

test('even length array sorting', () => {
  expect(mergeSortTopDown([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('sort array of odd length', () => {
  expect(mergeSortTopDown([6, 5, 3, 1, 8, 7, 2, 4, 0])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});