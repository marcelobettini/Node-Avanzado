const fs = require("node:fs/promises");

fs.writeFile("./testFile_2.txt", "Random text for the promisified function", {
  encoding: "utf-8",
})
  .then(() => console.log("File created!"))
  .catch((err) => console.log("Error:", err.message));
fs.writeFile("./files/", "Random text for the promisified function", {
  encoding: "utf-8",
})
  .then(() => console.log("File created!"))
  .catch((err) => console.log("Error:", err.message));
