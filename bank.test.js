const Bank = require('./bank');

describe('Bank', () => {
  let bank; 

  beforeEach(() => {
    bank = new Bank();
  })

  test('it prints out a statement', () => {
    bank.deposit(2000.00, '10/01/2023');
    bank.withdraw(1000.00, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 2000.00 ||  || 2000.00\n10/01/2023 ||  || 1000.00 || 1000.00");
  })

  test('it fails if 1000 is withdrawn when balance is only 500', () => {
    bank.deposit(500, '10/01/2023');
    expect(() => bank.withdraw(1000, '10/01/2023')).toThrow(new Error('Insufficient funds.'));
  });

  test('it reduces the balance to 99.99 when 0.01 is withdrawn', () => {
    bank.deposit(100.00, '10/01/2023');
    bank.withdraw(0.01, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 100.00 ||  || 100.00\n10/01/2023 ||  || 0.01 || 99.99");
  })

  test('it adds a float balance of 120.50 when deposited', () => {
    bank.deposit(120.50, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 120.50 ||  || 120.50");
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
  
  test('deposit 1000, 2000 on different dates and print statement', () => {
    bank.deposit(1000.00, '10/01/2023');
    bank.deposit(2000.00, '13/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 1000.00\n13/01/2023 || 2000.00 ||  || 3000.00");
  });

  test('deposit 1000, 2000 on different dates and withdraw 500 and print statement', () => {
    bank.deposit(1000.00, '10/01/2023');
    bank.deposit(2000.00, '13/01/2023');
    bank.withdraw(500.00, '14/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 ||  || 1000.00\n13/01/2023 || 2000.00 ||  || 3000.00\n14/01/2023 ||  || 500.00 || 2500.00");
  });
})