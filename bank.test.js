const Bank = require('./bank');

describe('Bank', () => {
  let bank; 

  beforeEach(() => {
    bank = new Bank();
  })

  it('returns a value of 0 when initialized', () => {
    expect(bank.printBalance()).toBe(0);
  })
  
  it('returns a value of 10 when 10 is deposited', () => {
    bank.deposit(10);
    expect(bank.printBalance()).toBe(10);
  })

  it('returns a value of 20 when 10 and 10 is deposited', () => {
    bank.deposit(10);
    bank.deposit(10);
    expect(bank.printBalance()).toBe(20);
  })

  it('returns a value of 10 when 20 is deposited and 10 is withdrawn', () => {
    bank.deposit(10);
    bank.deposit(10);
    bank.withdraw(10);
    expect(bank.printBalance()).toBe(10);
  })

  it('return a balance and date when the amount is deposited with date 14/01/2023', () => {
    bank.deposit(1000, '14/01/2023');
    expect(bank.printBalance()).toEqual([{"14/01/2023": 1000}]);
  })

  test('returns balance and date when 1000 deposited on 10/01/2023 and 2000 on 13/01/2023', () => {
    bank.deposit(1000, '10/01/2023');
    bank.deposit(2000, '13/01/2023');
    expect(bank.printBalance()).toEqual([{"10/01/2023": 1000}, {"13/01/2023": 2000}]);
  })

  test.only('returns total of 3000 when 1000 and then 2000 is deposited on 10/01/2023', () => {
    bank.deposit(1000, '10/01/2023');
    bank.deposit(2000, '10/01/2023');
    expect(bank.calculateTotal()).toBe(3000);
  })
})