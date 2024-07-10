import express from "express";

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World, Lucy!');
})

app.listen(3000);