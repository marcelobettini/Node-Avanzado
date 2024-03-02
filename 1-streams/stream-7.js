/*streams can be connected and modified with a Transform instance
 */
const { clear } = require("node:console");
const fs = require("node:fs");
const { Transform } = require("stream");

const readStream = fs.createReadStream("./utils/text_file.txt", {
  encoding: "utf-8",
});
const writeStream = fs.createWriteStream("./utils/text_file_piped.txt", {
  encoding: "utf-8",
});
readStream.setEncoding("utf-8");
const filter = new Transform({
  writableObjectMode: true,
  transform(data, encoding, cb) {
    this.push(data.toString().toUpperCase());
    cb();
  },
  final(cb) {
    cb();
  },
});
readStream.pipe(filter).pipe(writeStream);
readStream.on("end", () => console.log("Proceso finalizado"));
