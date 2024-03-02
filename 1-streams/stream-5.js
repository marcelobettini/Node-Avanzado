/*streams can be connected through a pipe */
const fs = require("node:fs");
const readStream = fs.createReadStream("./utils/text_file.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./utils/text_file_piped.txt", {
  encoding: "utf-8",
});

readStream.pipe(writeStream);
readStream.on("end", () => console.log("Proceso finalizado"));
