const fs = require("node:fs");
console.time("response time");
// read the file 500 times with a stream. Non-blocking. It reads the file progressively, accumulating content when available. It does'nt wait each loop iteration to be completed
for (let i = 0; i <= 500; i++) {
  const readStream = fs.createReadStream("./utils/text_file.txt", "utf-8");
}
console.timeEnd("response time"); //4 ms vs 6000 ms de noStream.js
