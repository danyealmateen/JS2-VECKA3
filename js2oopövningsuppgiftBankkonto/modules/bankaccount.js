class Bankaccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    console.log(this.name, this.balance += amount);
  }
  withdraw(amount) {
    console.log(this.name, this.balance -= amount);
  }
  showBalance() {
    console.log(this.name, this.balance);
  }
}

export { Bankaccount };
