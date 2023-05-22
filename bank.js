class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
    this.statement = [];
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

  calculateTotal() {
    this.total.forEach((object) => {
      if (object.hasOwnProperty('credit')) {
        this.balance += object.credit;
        this.statement.push(object, this.balance);
        console.log(this.statement);
      } else if (object.hasOwnProperty('debit')) {
        this.balance -= object.debit;
        this.statement.push(object, this.balance);
        console.log(this.statement);
      }
    });
    return this.balance;
  }
}

module.exports = Bank;