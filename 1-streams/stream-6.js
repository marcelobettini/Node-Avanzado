/*streams can be connected through a pipe
permiten revisar el flujo sin interrumpir el proceso*/
const fs = require("node:fs");
const { Duplex } = require("stream");

const readStream = fs.createReadStream("./utils/text_file.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./utils/text_file_piped.txt", {
  encoding: "utf-8",
});
const report = new Duplex({
  write(data, encoding, cb) {
    console.log(data);
    cb();
  },
  read(size) {
    console.log("Size:", size);
  },
});
readStream.pipe(report).pipe(writeStream);
readStream.on("end", () => console.log("Proceso finalizado"));
