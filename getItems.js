import { json, response } from "express";
import fetch from "node-fetch";

// const urls = [
//   "https://minecraft-ids.grahamedgecombe.com/items.json",
//   "https://minecraft-ids.grahamedgecombe.com/entities.json"
// ]

async function getItems() {

    const itemList = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");
  
      let result1 = await itemList.json();
      
    const entitiesList = await fetch("https://minecraft-ids.grahamedgecombe.com/entities.json");
  
      let result2 = await entitiesList.json();
  
      let result = result1.concat(result2);
      return result;
      // console.log(result)
}


export default getItems;
