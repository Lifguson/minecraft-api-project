import { json, response } from "express";
import fetch from "node-fetch";

// const urls = [
//   "https://minecraft-ids.grahamedgecombe.com/items.json",
//   "https://minecraft-ids.grahamedgecombe.com/entities.json"
// ]

async function getItems() {

    const response = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");
  
      let itemsResult = await response.json();

      // console.log(result)
      return itemsResult;
      
}


export default getItems;
