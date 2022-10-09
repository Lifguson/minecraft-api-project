import fetch from "node-fetch";

async function getEntities() {

 const entitiesList = await fetch("https://minecraft-ids.grahamedgecombe.com/entities.json");
  
 let result = await entitiesList.json();

 return result;
}
// console.log(result);

export default getEntities;