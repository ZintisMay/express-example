let axios = require("axios");

axios.get("https://www.google.com").then((response) => {
  console.log(response.data);
});

let n = 0;
let interval = setInterval(() => {
  console.log(n++);
  if (n > 10) {
    clearInterval(interval);
  }
}, 500);
