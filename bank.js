class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    let object = {};
    object.date = date;
    object.credit = amount;
    object.balance = this.balance += amount;
    this.total.push(object);
  }

  withdraw(amount, date) {
    let object = {};
    object.date = date;
    object.debit = amount;
    object.balance = this.balance -= amount;
    this.total.push(object);
  }

  printBalance() {
    return this.total;
  }
}

module.exports = Bank;