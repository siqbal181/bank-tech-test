import moment from 'moment';

class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount, date) {
    this.dateChecker(date);
    const credit = this.formatAmount(amount);
    const balance = this.balance += amount;
    this.transactions.push({ date, credit, balance: balance.toFixed(2) });
  }

  withdraw(amount, date) {
    this.dateChecker(date);
    if (this.balance < amount) {
      throw new Error('Insufficient funds.')
    }
    const debit = this.formatAmount(amount);
    const balance = this.balance -= amount;
    this.transactions.push({ date, debit, balance: balance.toFixed(2) });
  }

  formatAmount(amount) {
    return (Math.round(amount * 100) / 100).toFixed(2);
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
    const formatTransactions = this.transactions.map((item) => {
      const credit = item.credit !== undefined ? item.credit : '';
      const debit = item.debit !== undefined ? item.debit : '';
      return `${item.date} || ${credit} || ${debit} || ${item.balance}`
    })
    return [header, ...formatTransactions].join('\n');
  }
}

module.exports = Bank;