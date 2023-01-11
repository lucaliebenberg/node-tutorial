const express = require("express");
const app = express();

const logger = require("./logger"); // import middleware modules intp project
const authorize = require("./authorize"); // import middleware modules intp project

//  req => middleware => res

app.use([logger, authorize]); // the order of the middleware influences what will be run first

// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
