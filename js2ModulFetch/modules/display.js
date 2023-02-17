let creatingList = document.createElement("li");
let ul = document.createElement("ul");

let myArray = [];

function randomFunction(num) {
  myArray.push(num);
  myArray.forEach((ele, index) => {
    let li = document.createElement("li");
    li.innerHTML += `${ele}`;

    document.body.appendChild(li);
  });
  return myArray;
}

export { randomFunction, creatingList };
