const merge = require('./merge');

const left = [1, 3, 5, 6];
const right = [2, 4, 7, 8];


test('test merge two list', () => {
  expect(merge(left, right)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
