import { Bankaccount } from "./modules/bankaccount.js";

const account = new Bankaccount("CSN", 500);
account.showBalance();
account.deposit(1000);
account.withdraw(100);
