const checkBracket = require('./checkBracket');

test('check true brackets', () => {
  expect(checkBracket('()[{}]')).toEqual(true);
});

test('check false brackets', () => {
  expect(checkBracket('([))')).toEqual(false);
});

test('check mixed brackets', () => {
  expect(checkBracket('()[]{}{([])}')).toEqual(true);
});

test('check false brackets', () => {
  expect(checkBracket('()[]{}){([])}')).toEqual(false);
});