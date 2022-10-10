import fetch from "node-fetch";

async function getEntities() {

 const response = await fetch("https://minecraft-ids.grahamedgecombe.com/entities.json");
  
 let result = await response.json();

//  console.log(result);
 return result;
 

}

export default getEntities;