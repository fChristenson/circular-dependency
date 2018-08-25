const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/v1/users", (req, res) => {
  // save user
  res.json(req.body);
});

app.listen(3000);
