function displayCalc(text) {
  let header = document.createElement("h1");
  header.innerText = `${text}`;
  document.body.appendChild(header);
}

export { displayCalc };
