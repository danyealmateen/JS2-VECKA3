function displayFunction(size, type, text) {
  type = document.createElement(`${type}`);
  size = `${size}px`;
  type.innerText = `${text}`;
  document.body.appendChild(type);
}

export { displayFunction };
