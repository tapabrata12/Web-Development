
---

# 📘 JavaScript Operators – Complete Notes

---

## 🧠 What is an Operator?

An **operator** is a symbol that tells the compiler or interpreter to perform specific mathematical, relational, or logical operations and return a result. Operators work on **operands** (values or variables).

---

## 🧮 Types of Operators in JavaScript:

| Category                   | Description                                   |
| -------------------------- | --------------------------------------------- |
| Arithmetic                 | Performs mathematical operations              |
| Comparison                 | Compares two values                           |
| Logical                    | Combines boolean values                       |
| Assignment                 | Assigns values to variables                   |
| Unary                      | Operates on a single operand                  |
| Ternary                    | Conditional shorthand (if-else in one line)   |
| Bitwise                    | Operates on binary representations of numbers |
| Other (e.g., `instanceof`) | Miscellaneous special operators               |

---

## 1️⃣ Arithmetic Operators

| Operator | Name           | Example   | Result   |
| -------- | -------------- | --------- | -------- |
| `+`      | Addition       | `10 + 5`  | `15`     |
| `-`      | Subtraction    | `10 - 5`  | `5`      |
| `*`      | Multiplication | `10 * 5`  | `50`     |
| `/`      | Division       | `10 / 5`  | `2`      |
| `%`      | Modulus        | `10 % 5`  | `0`      |
| `**`     | Exponentiation | `10 ** 5` | `100000` |

> The `+` operator is also used for **string concatenation**.

```js
console.log("Tapabrata" + " " + "Chowdhury"); // "Tapabrata Chowdhury"
```

---

## 2️⃣ Comparison Operators

| Operator | Description           | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal (loose)         | `5 == '5'`  | `true`  |
| `===`    | Strict equal          | `5 === '5'` | `false` |
| `!=`     | Not equal (loose)     | `5 != '5'`  | `false` |
| `!==`    | Strict not equal      | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `5 > 3`     | `true`  |
| `<`      | Less than             | `5 < 3`     | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `5 <= 3`    | `false` |

> ✅ Always prefer `===` and `!==` for **type-safe comparisons**.

---

## 3️⃣ Logical Operators

| Operator | Name | Description                                  |    |                                               |
| -------- | ---- | -------------------------------------------- | -- | --------------------------------------------- |
| `&&`     | AND  | Returns `true` if **both** operands are true |    |                                               |
| \`       |      | \`                                           | OR | Returns `true` if **any one** operand is true |
| `!`      | NOT  | Reverses the boolean value                   |    |                                               |

```js
console.log(10 > 9 && 10 > 8);  // true
console.log(10 > 11 || 10 > 9); // true
console.log(!(10 > 11));        // true
```

---

## 4️⃣ Assignment Operators

| Operator | Description               | Example   |
| -------- | ------------------------- | --------- |
| `=`      | Assignment                | `x = 10`  |
| `+=`     | Addition assignment       | `x += 2`  |
| `-=`     | Subtraction assignment    | `x -= 2`  |
| `*=`     | Multiplication assignment | `x *= 2`  |
| `/=`     | Division assignment       | `x /= 2`  |
| `%=`     | Modulus assignment        | `x %= 2`  |
| `**=`    | Exponentiation assignment | `x **= 2` |

```js
let x = 10;
x *= 2; // 20
x /= 2; // 10
x %= 2; // 0
x **= 2; // 0 (0 ** 2)
```

---

## 5️⃣ Unary Operators

Operate on a **single operand**.

| Operator | Example     | Description                     |
| -------- | ----------- | ------------------------------- |
| `+`      | `+str`      | Converts to number              |
| `-`      | `-str`      | Converts to negative number     |
| `!`      | `!value`    | Converts to boolean and negates |
| `typeof` | `typeof x`  | Returns type as string          |
| `++`     | `x++ / ++x` | Increment (postfix/prefix)      |
| `--`     | `x-- / --x` | Decrement (postfix/prefix)      |

### 🔁 Prefix vs Postfix

```js
let x = 10;

let a = x++; // a = 10, x = 11
let b = ++x; // x = 12, b = 12
let c = x--; // c = 12, x = 11
let d = --x; // x = 10, d = 10
```

---

## 6️⃣ Ternary Operator

Short form of `if...else`.

```js
condition ? exprIfTrue : exprIfFalse;
```

Example:

```js
12 > 10 ? console.log(true) : console.log(false); // true
```

---

## 7️⃣ `instanceof` Operator

Used to test whether an object is an instance of a specific class or constructor.

```js
console.log([] instanceof Array);  // true
console.log({} instanceof Object); // true
```

---

## 🧠 Summary

| Operator Type | Key Symbols                         |   |         |
| ------------- | ----------------------------------- | - | ------- |
| Arithmetic    | `+`, `-`, `*`, `/`, `%`, `**`       |   |         |
| Comparison    | `==`, `===`, `!=`, `!==`, `>`, `<`  |   |         |
| Logical       | `&&`, \`                            |   | `, `!\` |
| Assignment    | `=`, `+=`, `-=`, `*=`, `/=`, `**=`  |   |         |
| Unary         | `+`, `-`, `!`, `typeof`, `++`, `--` |   |         |
| Ternary       | `condition ? trueExpr : falseExpr`  |   |         |
| Other         | `instanceof`, `delete`, `in`        |   |         |

---
