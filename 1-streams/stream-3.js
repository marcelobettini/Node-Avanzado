const fs = require("node:fs");
let content = "1234567890";
const iterations = 15;
for (let i = 0; i < iterations; i++) {
  content += content;
}
fs.writeFile(
  "./utils/output_noStream_file.txt",
  content,
  { encoding: "utf-8" },
  () => {
    console.log("direct file writing completed");
  }
);

const writeStream = fs.createWriteStream("./utils/output_stream_file.txt", {
  encoding: "utf-8",
});

writeStream.write(content, () => {
  console.log("write stream file completed"); //prints first, 'cos ends first
});
