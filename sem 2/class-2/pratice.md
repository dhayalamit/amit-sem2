# JavaScript Practice Questions

---

## Practice Question 1 – Nested Function Scope

### Task

Write JavaScript code that:

- Declares a variable `x` in the **global scope** with value `10`
- Creates a function `outer()` that:
  - Declares a variable `x` with value `20`
  - Defines a function `inner()`
- The `inner()` function must:
  - Print the value of `x` from `outer()`
- Call the `outer()` function

---

### Restrictions

- Do **NOT** pass parameters
- Use **only** `console.log`

---

## Practice Question 2 – Normal Function

### Task

Write JavaScript code that:

- Creates a **normal function** named `multiply`
- The function:
  - Accepts **two numbers**
  - Returns their **multiplication**
- Call the function with values `4` and `5`
- Print the result using `console.log`

---
=====================================================================================================================


## Objective

Implement the same business logic using **four different function styles** in JavaScript:

1. Function Declaration  
2. Function Expression  
3. Arrow Function  
4. Immediately Invoked Function Expression (IIFE)

---

## Scenario

You are building a **simple order pricing module** for an e-commerce application.

---

## Business Rules

- **Price per item:** ₹500  
- **Discount:** Apply **10% discount** if quantity ≥ 10  
- **Tax:** Apply **18% GST** after discount  
- **Output:** Return the **final payable amount**

---