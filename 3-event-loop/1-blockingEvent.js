//the bigger the text file, the bigger the diff between sync read and stream read
const fs = require("node:fs");
const http = require("node:http");
//readFileSync is a blocking method
function readFile() {
  //DOMContentLoaded 560 ms
  fs.readFileSync("./bigFile.txt", { encoding: "utf-8" });
  //DOMContentLoaded 50 ms
  // const readStream = fs.createReadStream("./bigFile.txt", {
  //   encoding: "utf-8",
  // });
}
http
  .createServer((req, res) => {
    for (let i = 0; i < 500; i++) {
      readFile();
    }
    res.write("Job is done!");
    res.end();
  })
  .listen(3000);
