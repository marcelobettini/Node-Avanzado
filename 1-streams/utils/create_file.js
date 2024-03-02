const fs = require("node:fs");
const file = fs.createWriteStream("text_file.txt");
//one million iterations
for (let i = 0; i < 1e6; i++) {
  file.write(`text line #${i + 1}\n`);
}
file.end();
