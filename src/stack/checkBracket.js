const closingBrackets = {
  '}': '{',
  ']': '[',
  ')': '(',
};

const openingBrackets = {
  '{': true,
  '[': true,
  '(': true,
};

function checkBracket(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (openingBrackets[bracket]) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) return false;

      const top = stack.pop();
      if (closingBrackets[bracket] !== top) return false;
    }
  }

  return stack.length === 0;
}

module.exports = checkBracket;