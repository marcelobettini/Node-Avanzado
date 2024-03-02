const fs = require("node:fs");
console.time("response time");
//read the file synchronously 500 times... this is a blocking operation. Must complete each loop file reading one at a time, from start to finish.
for (let i = 0; i <= 500; i++) {
  fs.readFileSync("./utils/text_file.txt", "utf-8");
}
console.timeEnd("response time"); //6 sec +
