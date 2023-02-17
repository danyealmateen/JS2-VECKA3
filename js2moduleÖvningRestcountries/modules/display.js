function display(arrayOfText) {
  let countryOutput = document.getElementById("countryOutput");

  countryOutput.innerHTML = "";

  arrayOfText.forEach((text) => {
    let header = document.createElement("h1");
    header.innerText = `${text}`;
    countryOutput.appendChild(header);
  });
}

export { display };
