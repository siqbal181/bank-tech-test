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
    let balance = 0;
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

// // Return the amount of 0 
// describe('Bank', () => {
//   it('returns a value of 0 when initialized', () => {
//     const bank = new Bank;
//     expect(bank.printBalance()).toBe(0);
//   })
// })

// // Returns an amount of 10 when 10 is deposited
//   it('returns a value of 10 when 10 is deposited', () => {
//     bank.deposit(10);
//     expect(bank.printBalance()).toBe(10);
//   })

// // Returns an amount of 20 when 10 and 10 is deposited

//   it('returns a value of 20 when 10 and 10 is deposited', () => {
//     bank.deposit(10);
//     bank.deposit(10);
//     expect(bank.printBalance()).toBe(20);
//   })

// // Returns an amount of 10 when 20 is added and 10 is withdrawn
//   it('returns a value of 10 when 20 is deposited and 10 is withdrawn', () => {
//     bank.deposit(10);
//     bank.deposit(10);
//     bank.withdraw(10);
//     expect(bank.printBalance()).toBe(10);
//   })

// Float numbers returns
  // test('it reduces the balance to 99.99 when 0.01 is withdrawn', () => {
  //   bank.deposit(100, '10/01/2023');
  //   bank.withdraw(0.01, '10/01/2023');
  //   expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 100 ||  || 100\n10/01/2023 ||  || 0.01 || 99.99");
  // })

  // Float numbers returns
  test('it adds a float balance of 120.50 when deposited', () => {
    bank.deposit(120.50, '10/01/2023');
    expect(bank.statement()).toEqual("date || credit || debit || balance\n10/01/2023 || 120.5 ||  || 120.5");
  })

  // Date error handling
  test('it calls error when the date is incorrect', () => {
    bank.deposit(100, '100/01/2023');
    expect(bank.statement()).toThrow(new Error('Incorrect date format, enter format DD/MM/YYYY'));
  })

    // Date error handling
  test('it throws error with dashes as dates', () => {
    bank.deposit(100, '10-01-2023');
    expect(bank.statement()).toThrow(new Error('Incorrect date format, enter format DD/MM/YYYY'));
  })



```

_Encode each example as a test. You can add to the above list as you go._

## 4. Implement the Behaviour

_After each test you write, follow the test-driving process of red, green, refactor to implement the behaviour._