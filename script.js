window.promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), getRandomTime()))
];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1000 and 5000 milliseconds (1 and 5 seconds)
}

Promise.any(window.promises)
  .then((result) => {
    // Print the result to the div with id "output"
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.error("Error:", error);
  });