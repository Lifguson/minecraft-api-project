import { promiseImpl } from "ejs";
import express, { response } from "express";
import getEntities from "./getEntities.js";
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
  Promise.all([
    getItems(),
    getEntities()
  ]).then(([items, entities]) => {
  console.log(items, entities);
    res.render("items", { title: "Items", items: items, entities: entities });
  });
});

app.get("/blocks", (req, res) => {
  getItems().then((result) => {
    res.render("blocks", { title: "Blocks", items: result });
  });
});

app.get("/mobs", (req, res) => {
  getEntities().then((result) => {
    res.render("mobs", { title: "Mobs", entities: result });
  });
});

app.get("/foods", (req, res) => {
  getItems()
  .then((result) => {
    res.render("foods", { title: "Foods", items: result });
  })
});

app.get("/biomes", (req, res) => {
  res.render("biomes", { title: "Biomes" });
});

app.get("/options", (req, res) => {
  res.render("options", { title: "Options" });
});
