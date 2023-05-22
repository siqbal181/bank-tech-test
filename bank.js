class Bank {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  printBalance() {
    return this.balance;
  }

}

module.exports = Bank;