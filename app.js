const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/items", (req, res) => {
  res.render("items", { title: "Items" });
});

app.get("/blocks", (req, res) => {
  res.render("blocks", { title: "Blocks" });
});

app.get("/mobs", (req, res) => {
  res.render("mobs", { title: "Mobs" });
});

app.get("/foods", (req, res) => {
  res.render("foods", { title: "Foods" });
});

app.get("/biomes", (req, res) => {
  res.render("biomes", { title: "Biomes" });
});

app.get("/options", (req, res) => {
  res.render("options", { title: "Options" });
});

// app.get("/quit", (req, res) => {
//   res.render("quit", { title: "Quit" });
// });



