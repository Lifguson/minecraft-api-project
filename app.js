import express, { response } from "express";
import getItems from "./getItems.js";

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
  getItems().then((result) => {
    res.render("items", { title: "Items", items: result });
  });
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
