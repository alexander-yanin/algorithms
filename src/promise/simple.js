function isEvenNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 2000);
  });
}

isEvenNumber(21)
  .then((data) => {
    console.log('data', data);
  }, (err) => {
    console.log('err1', err);
  })
  .catch((err) => {
    console.log('err2', err);
  });

const btn = document.querySelector('#btn');
btn.addEventListener('click', handleClick);

let promiseCount = 0;

function handleClick(e) {
  let thisPromiseCount = ++promiseCount;
  const log = document.querySelector('#log');

  const p = new Promise((resolve, reject) => {
    log.insertAdjacentHTML('afterend', thisPromiseCount +
      ') Запуск обещания (запуск асинхронного кода)');

    setTimeout(() => {
      resolve(thisPromiseCount)
    }, Math.random() * 2000 + 1000);
  });

  p.then((val) => {
    log.insertAdjacentHTML('afterend', val +
      ') Обещание выполнено (асинхронный код завершён)');
  });

  log.insertAdjacentHTML('afterend', thisPromiseCount +
    ') Обещание создано (синхронный код завершён)');
}