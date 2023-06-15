import express from "express";
// const express = require("express");
import { courses } from "./data.js";
const app = express();
const port = 3500;

// app.get("/", (req, res) => {
//   //res.send("Hello World!");
//   let products = [
//     { id: 1, title: "Macbook Pro", rating: 5 },
//     { id: 2, title: "Macbook Air", rating: 4 },
//   ];
//   res.json(products);
// });

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
