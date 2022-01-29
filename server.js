const express = require("express");
const server = express();
const port = 3000;

let favoriteFoods = [];

server.get("/", (req, res) => {
  res.send("root!");
});

server.get("/banana", (req, res) => {
  res.send("banana!");
});

server.get("/addFood/:food", (req, res) => {
  console.log(req.params);
  console.log(req.params.food);
  favoriteFoods.push(req.params.food);
  res.send(favoriteFoods.join(" "));
});

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
