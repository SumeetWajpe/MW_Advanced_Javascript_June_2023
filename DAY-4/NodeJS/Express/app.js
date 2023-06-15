import express from "express";
const app = express();
const port = 3500;

app.get("/", (req, res) => {
  //res.send("Hello World!");
  let products = [
    { id: 1, title: "Macbook Pro", rating: 5 },
    { id: 2, title: "Macbook Air", rating: 4 },
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
