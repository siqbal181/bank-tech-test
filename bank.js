class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    let object = {};
    object.date = date
    object.debit = amount;
    this.total.push(object)
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  printBalance() {
    return this.total;
  }

  calculateTotal() {
    const total = this.total
      .map(item => item.debit)
      .reduce((prev, current) => prev + current, 0);
    return total;
  }

}

module.exports = Bank;