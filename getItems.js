import { json } from "express";
import fetch from "node-fetch";

async function getItems() {
  const response = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");

  if (response.status == 200) {
    let data = await response.json();
    return data;
  }
  throw new Error(response.status);
}

// const items = await getItems();
// console.log(items);

export default getItems;
