const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from yelpcamp");
});

app.listen(3000, () => {
  console.log("Connection is running on Port 3000");
});
