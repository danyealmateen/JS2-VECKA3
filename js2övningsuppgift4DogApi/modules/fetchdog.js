import { displayImage } from "./display.js";

async function getDogs(breed) {
  let url = `https://dog.ceo/api/breed/${breed}/images`;
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}
getDogs("chihuahua");

export { getDogs };
