async function fetchcountry(lang) {
  const url = `https://restcountries.com/v3.1/lang/${lang}`;
  let arrayOfCountries = [];
  const response = await fetch(url);
  const data = await response.json();

  data.forEach((ele) => {
    arrayOfCountries.push(ele.fifa);
  });

  console.log(arrayOfCountries);
  return arrayOfCountries;
}

export { fetchcountry };
