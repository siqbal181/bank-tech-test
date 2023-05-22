class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    const object = {
      date,
      credit: amount,
      balance: this.balance += amount
    };
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

  statement() {
    const header = 'date || credit || debit || balance'
    const formatLines = this.total.map((item) => {
      const credit = item.credit !== undefined ? item.credit : '';
      const debit = item.debit !== undefined ? item.debit : '';
      return `${item.date} || ${credit} || ${debit} || ${item.balance}`
    })
    const output = [header, ...formatLines].join('\n');
    return output;
  }
}

module.exports = Bank;