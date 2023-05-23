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

  test('it prints out a statement', () => {
    bank.deposit(2000, '10/01/2023');
    bank.withdraw(1000, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 2000 ||  || 2000\n10/01/2023 ||  || 1000 || 1000");
  })

  test('it fails if 1000 is withdrawn when balance is only 500', () => {
    bank.deposit(500, '10/01/2023');
    expect(() => bank.withdraw(1000, '10/01/2023')).toThrow(new Error('Insufficient funds.'));
  });

  test('it reduces the balance to 99.99 when 0.01 is withdrawn', () => {
    bank.deposit(100, '10/01/2023');
    bank.withdraw(0.01, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 100 ||  || 100\n10/01/2023 ||  || 0.01 || 99.99");
  })

  test('it adds a float balance of 120.50 when deposited', () => {
    bank.deposit(120.50, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 120.5 ||  || 120.5");
  })

  test('date checker method returns error with 30th February entered', () => {
    expect(() => bank.dateChecker('30/02/2023')).toThrow('Enter correct date input with format DD/MM/YYYY');
  });

  test('deposit method returns error with 30th February entered as incorrect date', () => {
    expect(() => bank.deposit(100, '30/02/2023')).toThrow('Enter correct date input with format DD/MM/YYYY');
  });

  test('withdraw method returns error with 30th February entered as incorrect date', () => {
    expect(() => bank.withdraw(100, '30/02/2023')).toThrow('Enter correct date input with format DD/MM/YYYY');
  });

  test('deposit method returns error with incorrect date', () => {
    expect(() => bank.deposit(100, '300/02/2023')).toThrow('Enter correct date input with format DD/MM/YYYY');
  });

  test('deposit method returns error with incorrect date format', () => {
    expect(() => bank.deposit(100, '20-02-2023')).toThrow('Enter correct date input with format DD/MM/YYYY');
  });
})