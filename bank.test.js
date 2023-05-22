const Bank = require('./bank');

describe('Bank', () => {
  let bank ; 

  beforeEach(() => {
    bank = new Bank();
  })

  it('returns a value of 0 when initialized', () => {
    expect(bank.printBalance()).toBe(0);
  })
  
  // it('returns a value of 10 when 10 is deposited', () => {
  //   bank.deposit(10);
  //   expect(bank.printBalance()).toBe(10);
  // })
})