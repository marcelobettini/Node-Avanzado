const fs = require("node:fs");
const util = require("node:util");
const createFileWithPromise = util.promisify(fs.writeFile);
createFileWithPromise(
  "./testFile_2.txt",
  "Random text for the promisified function",
  { encoding: "utf-8" }
)
  .then(() => console.log("File created!"))
  .catch((err) => console.log("Error:", err.message));
createFileWithPromise("./files/", "Random text for the promisified function", {
  encoding: "utf-8",
})
  .then(() => console.log("File created!"))
  .catch((err) => console.log("Error:", err.message));
