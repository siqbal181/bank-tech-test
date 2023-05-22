class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    let object = {};
    object.date = date;
    object.credit = amount;
    this.total.push(object);
  }

  withdraw(amount, date) {
    let object = {};
    object.date = date;
    object.debit = amount;
    this.total.push(object);
  }

  printBalance() {
    return this.total;
  }

  calculateTotal() {
    this.total.forEach((object) => {
      if (object.hasOwnProperty('credit')) {
        this.balance += object.credit;
      } else if (object.hasOwnProperty('debit')) {
        this.balance -= object.debit;
      }
    });
    return this.balance;
  }
}

module.exports = Bank;