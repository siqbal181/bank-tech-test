## Project Title: Bank Tech Test

## Description

This is a practice tech test for a bank statement printout. It will allow a customer to deposit, withdraw and print a statement of their transactions.

## Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Getting Started

### Dependencies

* Install node using `npm install`
* Ensure you have initialized node

### Tests & Code Quality Checks
* Run `jest` for tests
* Run `npx eslint bank.js` for code quality checks

## Approach

* I began with testing a simpler version of the banking app, which only deposited and withdrew amounts without any date addition.
* Once I was confident in these tests, I then expanded to introduce dates 
* I needed to navigate running balance of the transactions, which was done using the statement method
* I segemented some supporting methods (such as date validation and amount formatter for 2DP amounts)




