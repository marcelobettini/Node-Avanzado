const https = require("node:https");
const req = https.get(
  "https://en.wikipedia.org/w/api.php?action=help&format=json",
  (res) => {
    res.on("data", (data) => {
      console.log("...receiving data...");
    });
    res.on("end", () => {
      console.log("https request end.");
    });
  }
);
req.on("socket", (sockect_data) => {
  console.log("http init.");
});

req.on("error", (error) => {
  console.log("error:", error);
});
