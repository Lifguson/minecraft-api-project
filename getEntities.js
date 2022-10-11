import fetch from "node-fetch";

async function getEntities() {

 const response = await fetch("https://minecraft-ids.grahamedgecombe.com/entities.json");
  
 let entitiesResult = await response.json();

//  console.log(result);
 return entitiesResult;
 

}

export default getEntities;