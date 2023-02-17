import { fetchCountry } from "./modules/fetchcountry.js";
import { displayLang } from "./modules/display.js";

let button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.getElementById("input").value;
  fetchCountry(`${input}`);
});
