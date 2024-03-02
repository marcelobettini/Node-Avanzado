const fs = require("node:fs");
const readStream = fs.createReadStream("./utils/large_text_file.txt", {
  encoding: "utf-8",
});

readStream
  .on("open", () => {
    console.log("opening file");
  })
  .on("data", () => {
    console.log("receiving data progressively without blocking...");
  })
  .on("close", () => {
    console.log("file closed");
  })
  .on("error", () => {
    console.log("file error");
  });
