# {{PROBLEM}} Class Design Recipe

## 1. Describe the Problem

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

## 2. Design the Class Interface

_Include the initializer and public methods with all parameters and return values._

```javascript

class Bank {
  constructor() {
    balance = 0;
  }

  deposit(amount) {
    balance += amount
  }

  withdraw(amount) {
    balance -= amount
  }

  printBalance() {
    return balance;
  }
}
```

## 3. Create Examples as Tests

_Make a list of examples of how the class will behave in different situations._

```javascript

// Return the amount of 0 
describe('Bank', () => {
  it('returns a value of 0 when initialized', () => {
    const bank = new Bank;
    expect(bank.printBalance()).toBe(0);
  })
})

// Returns an amount of 10 when 10 is deposited
  it('returns a value of 10 when 10 is deposited', () => {
    const bank = new Bank;
    bank.deposit(10);
    expect(bank.printBalance()).toBe(10);
  })

// Returns an amount of 20 when 10 and 10 is deposited

  it('returns a value of 20 when 10 and 10 is deposited', () => {
    const bank = new Bank;
    bank.deposit(10);
    bank.deposit(10);
    expect(bank.printBalance()).toBe(20);
  })

```

_Encode each example as a test. You can add to the above list as you go._

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._