function bubbleSort(_list) {
  const list = [].concat(_list);

  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  return list;
}

module.exports = bubbleSort;