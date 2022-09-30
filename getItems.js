import { json } from "express";
import fetch from "node-fetch";

async function getItems() {
  const response = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");

  if (response.status == 200) {
    let result = await response.json();
    return result;
  }
  throw new Error(response.status);
}

export default getItems;
