const url = `https://forum-b278a-default-rtdb.europe-west1.firebasedatabase.app/.json`;

async function postComment(comment) {
  const options = {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(url, options);
  const id = await response.json();
  return id;
}

async function getComments() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export { postComment, getComments };
