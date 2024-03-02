//callbacks
const fs = require("node:fs");
fs.writeFile(
  "./testFile_1.txt",
  "some random text",
  { encoding: "utf8" },
  (err) => {
    err ? console.log("error:", err.message) : console.log("Todo piola gato");
  }
);
//failure
fs.writeFile("./archivo/", "some random text", { encoding: "utf8" }, (err) => {
  err ? console.log("error:", err) : console.log("Todo piola");
});
