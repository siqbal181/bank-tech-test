import moment from 'moment';

class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    this.dateChecker(date);
    const object = {
      date,
      credit: amount,
      balance: this.balance += amount
    };
    this.total.push(object);
  }

  withdraw(amount, date) {
    this.dateChecker(date);
    if (this.balance < amount) {
      throw new Error('Insufficient funds.')
    }
    const object = {
      date,
      debit: amount,
      balance: this.balance -= amount
    };
    this.total.push(object);
  }

  printBalance() {
    return this.total;
  }

  dateChecker(date) {
    const formattedDate = moment(date, 'DD/MM/YYYY', true);
    if (formattedDate.isValid()) {
      return date
    } else {
      throw new Error('Enter correct date input with format DD/MM/YYYY')
    }
  }

  statement() {
    const header = 'date || credit || debit || balance'
    const formatTotal = this.total.map((item) => {
      const credit = item.credit !== undefined ? item.credit : '';
      const debit = item.debit !== undefined ? item.debit : '';
      return `${item.date} || ${credit} || ${debit} || ${item.balance}`
    })
    const statementOutput = [header, ...formatTotal].join('\n');
    return statementOutput;
  }
}

module.exports = Bank;