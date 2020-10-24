// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransactionNew = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve([transaction.id, delay]);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = arr => {
  console.log(`Transaction ${arr[0]} processed in ${arr[1]} ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransactionNew({ id: 70 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 71 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 72 }).then(logSuccess).catch(logError);
makeTransactionNew({ id: 73 }).then(logSuccess).catch(logError);
