import moment from 'moment';

class Bank {
  constructor() {
    this.balance = 0;
    this.total = [];
  }

  deposit(amount, date) {
    this.dateChecker(date);
    const credit = (Math.round(amount * 100) / 100).toFixed(2);
    const balance = (this.balance += Math.round(amount * 100) / 100);
    const object = {
      date,
      credit,
      balance: balance.toFixed(2)
    };
    this.total.push(object);
  }

  withdraw(amount, date) {
    this.dateChecker(date);
    if (this.balance < amount) {
      throw new Error('Insufficient funds.')
    }
    const debit = (Math.round(amount * 100) / 100).toFixed(2);
    const balance = (this.balance -= Math.round(amount * 100) / 100);
    const object = {
      date,
      debit,
      balance: balance.toFixed(2)
    };
    this.total.push(object);
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