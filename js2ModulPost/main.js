import { getFormData } from "./modules/formhandler.js";
import { postComment, getComments } from "./modules/firebase.js";
import { displayComments } from "./modules/display.js";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comment = getFormData(form);
  console.log(comment);
  
  postComment(comment);
});
getComments().then(displayComments);
