const commandLineArgs = require("command-line-args");
const express = require("express");
const app = express();

const redirectToGzip = (contentType) => (req, res, next) => {
  req.url = req.url + "index.html.gz";
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", contentType);
  next();
};

app.get("/", redirectToGzip("text/html"));
app.use(express.static(__dirname + "/build"));

const optionDefinitions = [
  { name: "port", alias: "p", type: Number, defaultValue: 6060 },
];

const options = commandLineArgs(optionDefinitions);
app.listen(options.port);
console.log(`Server is listening on ${options.port}`);
