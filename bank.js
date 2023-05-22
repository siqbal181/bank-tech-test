class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    let object = {};
    object[date] = amount;
    this.total.push(object)
    console.log(this.total);
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printBalance() {
    return this.total;
  }

}

module.exports = Bank;