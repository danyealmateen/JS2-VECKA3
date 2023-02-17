import { displayLang } from "./display.js";

async function fetchCountry(lang) {
  let url = `https://restcountries.com/v3.1/lang/${lang}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  data.forEach((country) => {
    displayLang(country.name.common);
    console.log(country.name.common);
  });

  return data;
}

export { fetchCountry };
