import { json } from "express";
import fetch from "node-fetch";


async function getItems() {
  const response = await fetch("https://minecraft-ids.grahamedgecombe.com/items.json");

    let result = await response.json();
    return result;
}
  
  
  // const urls = [
  //   "https://minecraft-ids.grahamedgecombe.com/items.json",
  //   "https://minecraft-ids.grahamedgecombe.com/entities.json"
  // ]

  // try {
    //   const response = await Promise.all(
    //     urls.map(url => fetch(url).then(response => response.json()))
    //   )
    //   return response;
    // } catch (err) {
    //   console.log(err);
    // }


export default getItems;
