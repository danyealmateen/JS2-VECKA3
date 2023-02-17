const baseUrl = `https://dog.ceo/api/breeds/image/random/`;
async function getDogImages(amount) {
  const response = await fetch(baseUrl + amount);
  const data = await response.json();
  console.log(data.message);
  return data.message;
}

export { getDogImages };
