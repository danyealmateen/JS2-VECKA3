import { getDogs } from "./modules/fetchdog.js";
import { displayImage } from "./modules/display.js";

let result = await getDogs("pitbull");

result.forEach((res) => {
  console.log(res);
  displayImage(res);
});
