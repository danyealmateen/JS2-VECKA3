const container = document.querySelector("#commentsContainer");

function displayComments(comments) {
  container.innerHTML = "";

  const commentsArray = Object.values(comments);
  console.log(commentsArray);

  commentsArray.forEach((comment) => {
    createElement("h1", comment.title);
    createElement("p", comment.comment);
    createElement("p", comment.name);
  });
}

function createElement(type, text) {
  const el = document.createElement(type);
  el.innerText = text;
  container.append(el);
}

export { displayComments };
