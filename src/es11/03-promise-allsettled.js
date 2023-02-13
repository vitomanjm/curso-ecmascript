const promise1 = new Promise((resolve, reject) => resolve("WaaadaaJeeeel"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve(true));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response));