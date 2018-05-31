const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const {log} = require('./utils')

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send index.html to all requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(80, () => console.log("Server listening at PORT 80"));
