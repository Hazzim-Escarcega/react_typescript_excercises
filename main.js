/* //Practice code
const myPromises = [
  new Promise((resolve, reject) => setTimeout(reject(1500), 1500)),
  new Promise((resolve, reject) => setTimeout(resolve(2500), 2500)),
  new Promise((resolve, reject) => setTimeout(resolve(3500), 3500)),
];

function calculateSquareArea() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const squareArea = 5 * 5;
      resolve(squareArea);
    }, 2000);
  });
}
function onFullfill(data) {
  console.log("onFullfill: ", aasd);
}
function onReject(reason) {
  console.log("onrReject: ", reason);
}

function onFullfill(data) {
  console.log("onFullfill: ", data);
}
Promise.race(myPromises)
  .then(onFullfill)
  .catch((reason) => {
    console.log("catch", reason);
  });
 */

let myNumber = 5;

function changeNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      myNumber = 18;
      resolve(myNumber);
    }, 5000);
  });
}

async function startChange() {
  await changeNumber();
  console.log(myNumber);
}

startChange();
