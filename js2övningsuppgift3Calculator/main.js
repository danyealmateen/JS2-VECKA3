import { firstCalc, secondCalc } from "./modules/calculator.js";

import { displayCalc } from "./modules/display.js";

displayCalc(
  `Adderad summa: ${firstCalc(2, 2)} 
  Multiplicerad summa: ${secondCalc(3, 3)}`
);
