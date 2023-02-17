function displayImage(urlToImage) {
  let img = document.createElement("img");
  img.src = urlToImage;
  document.body.appendChild(img);
}

export { displayImage };
