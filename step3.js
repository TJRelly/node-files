const fs = require("fs");
const axios = require("axios");

function cat(path) {
  try {
    // store the read file contents
    var contents = fs.readFileSync(path, "utf8");
    console.log(`file contents are "${contents}"`);
  } catch (error) {
    // errors thrown by fs will be caught here
    console.error(error);
    // kill the process and tell the shell it errored
    process.exit(1);
  }
}

function webCat(url) {
  axios.get(url).then(function (resp) {
    console.log(resp.data.slice(0, 80), "...");
  });
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
