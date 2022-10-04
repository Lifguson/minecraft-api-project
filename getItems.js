import { json, response } from "express";
import fetch from "node-fetch";

async function getItems() {
  // const response = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");

  //   let result = await response.json();
  //   return result;

  
  try {
      const result = await Promise.all([
        fetch("https://minecraft-ids.grahamedgecombe.com/items.json").then(response => response.json()),
        fetch("https://minecraft-ids.grahamedgecombe.com/entities.json").then(response => response.json())
      ]);
      console.log(result);
    } catch {
      throw Error("Promise failed");
    }
  }

export default getItems;
