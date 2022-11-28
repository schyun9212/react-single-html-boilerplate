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

const PORT = 3000;
app.listen(PORT);
console.log(`Server is listening on ${PORT}`);
