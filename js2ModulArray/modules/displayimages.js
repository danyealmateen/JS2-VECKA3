function displayDogImages(urlArray) {
  urlArray.forEach((url) => {
    let img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  });
}

export { displayDogImages };
