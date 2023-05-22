const Bank = require('./bank');

describe('Bank', () => {
  it('returns a value of 0 when initialized', () => {
    const bank = new Bank;
    expect(bank.printBalance()).toBe(0);
  })
})