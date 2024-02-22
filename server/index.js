import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);

  console.log("product ==> ", product);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
app.get("/test", (req, res) => {
  res.send("OK");
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
