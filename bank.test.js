const Bank = require('./bank');

describe('Bank', () => {
  let bank; 

  beforeEach(() => {
    bank = new Bank();
  })

  test('returns a value of 0 when initialized', () => {
    expect(bank.printBalance()).toEqual([]);
  })

  test('returns balance and date when 1000 deposited on 10/01/2023', () => {
    bank.deposit(1000, '10/01/2023');
    expect(bank.printBalance()).toEqual([{"balance": 1000, "credit": 1000, "date": "10/01/2023"}]);
  })

  test('returns balance and date when 1000 deposited twice on 10/01/2023', () => {
    bank.deposit(1000, '10/01/2023');
    bank.deposit(1000, '10/01/2023');
    expect(bank.printBalance()).toEqual([{"balance": 1000, "credit": 1000, "date": "10/01/2023"}, {"balance": 2000, "credit": 1000, "date": "10/01/2023"}]);
  })

  test('returns balance of 3000 and date when 2000 deposited twice on 10/01/2023 and then 1000 withdrawn', () => {
    bank.deposit(2000, '10/01/2023');
    bank.deposit(2000, '10/01/2023');
    bank.withdraw(1000, '10/01/2023');
    expect(bank.printBalance()).toEqual([{"balance": 2000, "credit": 2000, "date": "10/01/2023"}, {"balance": 4000, "credit": 2000, "date": "10/01/2023"}, {"balance": 3000, "debit": 1000, "date": "10/01/2023"}]);
  })

  test.only('it prints out a statement', () => {
    bank.deposit(2000, '10/01/2023');
    bank.withdraw(1000, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 2000 ||  || 2000\n10/01/2023 ||  || 1000 || 1000");
  })
})