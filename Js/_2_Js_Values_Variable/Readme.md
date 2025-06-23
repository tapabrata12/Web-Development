
---

## 🌟 **Variables in JavaScript**

### 📌 **What is a Variable in JavaScript?**

A **variable** in JavaScript is a container used to store data that can be changed later. Think of it like a labeled box where you can keep a value such as a number, string, object, or even a function.

In JavaScript, variables are used to hold data and make your program dynamic and interactive.

```javascript
let name = "John";
```

In the example above, `name` is a variable that stores the string `"John"`.

---

### 🧩 **Parts of a Variable**

A variable declaration typically has three parts:

1. **Declaration Keyword**

   * This is the **keyword** used to declare a variable. JavaScript has three ways to declare variables:

     * `var` – old and less commonly used now.
     * `let` – block-scoped, introduced in ES6.
     * `const` – block-scoped, used for constants that don’t change.

   ```javascript
   let age;
   const PI = 3.14;
   ```

2. **Variable Name (Identifier)**

   * This is the name you give to the variable.
   * Example: `age`, `totalScore`, `username`

3. **Value (Optional during declaration)**

   * This is the data/value assigned to the variable.
   * You can declare a variable without assigning a value and assign it later.

   ```javascript
   let score;       // Declared only
   score = 50;      // Assigned later
   ```

---

### 🔤 **Naming Conventions in JavaScript**

To keep code readable and maintainable, JavaScript follows certain **naming conventions** for variables:

#### ✅ **Rules (Must Follow)**

1. **Names can include letters, digits, underscores (\_), and dollar signs (\$)**.

   * Example: `userName`, `_counter`, `$value`

2. **Must begin with a letter, underscore (\_), or dollar sign (\$)**

   * Valid: `name`, `_temp`, `$price`
   * Invalid: `1stName` (starts with digit ❌)

3. **Cannot be a reserved JavaScript keyword**

   * ❌ Invalid: `var`, `function`, `let`, `class`

#### ✨ **Best Practices (Should Follow)**

* **Use camelCase** for variable names

  * Example: `userAge`, `totalPrice`, `isLoggedIn`

* **Use meaningful names**

  * Good: `studentScore`
  * Bad: `x`, `a`, `temp` (unless used in a short block of code)

* **Constants are usually in UPPERCASE (if truly constant)**

  * Example: `const MAX_USERS = 100;`

* **Be consistent** in naming throughout your code.

---

### 📚 Example

```javascript
let userName = "Alice";     // camelCase, descriptive
const PI = 3.14159;         // uppercase for constant
let _counter = 0;           // starts with underscore
let $price = 199.99;        // starts with dollar sign
```

---

### 🔐 Summary

| Feature          | Description                                               |
| ---------------- | --------------------------------------------------------- |
| **What**         | A named container to store data                           |
| **Parts**        | Declaration keyword, variable name, optional value        |
| **Keywords**     | `var`, `let`, `const`                                     |
| **Naming rules** | No starting with digits, no keywords, use letters/\$/\_   |
| **Conventions**  | Use camelCase, descriptive names, UPPERCASE for constants |

---