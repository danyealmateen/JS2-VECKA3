import { fetchcountry } from "./modules/fetchcountry.js";
import { display } from "./modules/display.js";

let button = document.getElementById("button");

button.addEventListener("click", async (event)  => {
  event.preventDefault();
  let inputText = document.getElementById("inputText").value;
  const countries = await fetchcountry(inputText);
  display(countries);
});
