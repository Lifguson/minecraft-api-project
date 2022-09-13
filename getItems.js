import fetch from "node-fetch";

async function getItems(name) {
  const response = await fetch(
    "https://minecraft-ids.grahamedgecombe.com/items.json"
  );

  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const data = await response.json();
}

export default getItems;
