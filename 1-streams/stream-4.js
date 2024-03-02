const fs = require("node:fs");
let content = "1234567890";
const iterations = 15;
/*We know that the streams work in progressive mode, therefore, we can move it inside the loop. It will open the file and write to it as information becomes available, adding a little at each iteration.
 */
const writeStream = fs.createWriteStream("./utils/output_stream_file.txt", {
  encoding: "utf-8",
});

for (let i = 0; i < iterations; i++) {
  content += content;
  writeStream.write(content, () => {
    console.count("writing..."); //prints first, 'cos ends first
  });
}
fs.writeFile(
  "./utils/output_noStream_file.txt",
  content,
  { encoding: "utf-8" },
  () => {
    console.log("direct file writing completed");
  }
);
