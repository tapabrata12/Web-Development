
---

# 📘 JavaScript Variables – In-depth Notes

---

## 🧠 What Are Variables?

Variables in JavaScript are **containers for storing data values**. They help developers store, update, and manipulate information during the execution of a program.

### ✅ Before ES6:

* JavaScript only had `var` for declaring variables.

### ✅ After ES6 (ECMAScript 2015):

* Introduced `let` and `const` for better scoping and predictability.

---

## 📝 Variable Declaration Keywords

| Keyword | Scope           | Redeclarable | Reassignable | Hoisting Behavior        |
| ------- | --------------- | ------------ | ------------ | ------------------------ |
| `var`   | Function-scoped | ✅ Yes        | ✅ Yes        | Hoisted with `undefined` |
| `let`   | Block-scoped    | ❌ No         | ✅ Yes        | Hoisted (TDZ applies)    |
| `const` | Block-scoped    | ❌ No         | ❌ No         | Hoisted (TDZ applies)    |

---

## 🧪 Examples

```javascript
var myName = "Tapabrata";
let myCity = "Kolkata";
const PI = 3.14;
```

* `var` is function-scoped and allows re-declaration.
* `let` and `const` are **block-scoped** and cannot be redeclared in the same scope.
* `const` must be initialized during declaration and cannot be reassigned.

---

## ⚠️ Bad Practices

```javascript
a = 10; // Implicit global variable (No declaration)
```

> ❌ Not recommended: It pollutes the global scope.

---

## 🧱 Declaration vs Initialization

```javascript
var x; // Declaration
x = 10; // Initialization
```

> Declaration is just telling JS a variable exists; Initialization assigns a value to it.

---

## ⚖️ Redeclaration & Reassignment

```javascript
var a = 10;
var a = 20; // ✅ No Error (But risky)

let b = 30;
// let b = 40; ❌ Error

const c = 50;
c = 60; // ❌ Error
```

---

## 🌍 Scope in JavaScript

### 1. Global Scope

```javascript
var globalVar = "I'm global";
function show() {
  console.log(globalVar); // Accessible
}
```

### 2. Function Scope

```javascript
function test() {
  var localVar = "Inside Function";
  console.log(localVar);
}
console.log(localVar); // ❌ Error
```

### 3. Block Scope

```javascript
{
  let blockLet = "Inside block";
  const blockConst = "Also inside block";
}
console.log(blockLet); // ❌ Error
```

---

## 🚧 Function vs Block Scope

```javascript
{
  var v = "Function Scoped";
}
console.log(v); // ✅ Accessible

{
  let l = "Block Scoped";
}
console.log(l); // ❌ Error
```

---

## 🕓 Temporal Dead Zone (TDZ)

> The **TDZ** is the time between entering a block and the actual declaration of a `let`/`const` variable where accessing it will throw a **ReferenceError**.

### Example:

```javascript
console.log(a); // ❌ ReferenceError
let a = 10;
```

* JS knows `a` exists but throws an error because it hasn’t been initialized yet.
* This only applies to `let` and `const`.

### With `var`:

```javascript
console.log(b); // ✅ undefined
var b = 20;
```

---

## 🎈 Hoisting in JavaScript

> Hoisting is JavaScript's behavior of **moving declarations to the top** of the current scope during compile time.

### With `var`:

```javascript
console.log(x); // undefined
var x = 10;
```

* JS moves `var x` to the top and initializes it with `undefined`.

### With `let`/`const`:

```javascript
console.log(y); // ❌ ReferenceError
let y = 10;
```

* The variable is hoisted but **not initialized**, triggering TDZ.

---

## 🧠 Summary – Best Practices

✅ **Prefer `let` and `const` over `var`**
✅ Use `const` when the variable shouldn't change
✅ Declare variables at the top of their scope
❌ Avoid re-declaring variables with `var`
❌ Never use undeclared variables (`a = 10`)
✅ Understand scope (global, function, block)
✅ Be aware of hoisting and TDZ when organizing code

---

## 🔍 Visual Cheatsheet

```javascript
// var hoisting
console.log(a); // undefined
var a = 5;

// let/const hoisting
console.log(b); // ReferenceError
let b = 10;

// Scope
function foo() {
  var x = 1; // Function-scoped
  if (true) {
    let y = 2; // Block-scoped
    const z = 3; // Block-scoped
  }
  console.log(x); // 1
  // console.log(y); // Error
}
```

---

