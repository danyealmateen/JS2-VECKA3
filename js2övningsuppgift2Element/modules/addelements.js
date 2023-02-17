function firstTextAndColor(color, text) {
  let header = document.createElement("h1");
  header.style.backgroundColor = `${color}`;
  header.innerText = `${text}`;
  document.body.appendChild(header);
}

function secondTextAndColor(color, text) {
  let paragraph = document.createElement("p");
  paragraph.style.color = `${color}`;
  paragraph.innerText = `${text}`;
  document.body.appendChild(paragraph);
}

export { firstTextAndColor, secondTextAndColor };
