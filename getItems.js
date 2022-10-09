import { json, response } from "express";
import fetch from "node-fetch";

// const urls = [
//   "https://minecraft-ids.grahamedgecombe.com/items.json",
//   "https://minecraft-ids.grahamedgecombe.com/entities.json"
// ]

async function getItems() {

    const itemList = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");
  
      let result = await itemList.json();

      return result;
      // console.log(result)
}


export default getItems;
