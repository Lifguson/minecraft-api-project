import { json } from "express";
import fetch from "node-fetch";

async function getItems(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    let data = await response.json();
    return data;
  }
  throw new Error(response.status);
}

const items = await getItems("https://minecraft-ids.grahamedgecombe.com/items.json");
console.log(items);

export default getItems;
