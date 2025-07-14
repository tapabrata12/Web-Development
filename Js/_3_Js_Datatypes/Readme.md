
---

# 📘 JavaScript Data Types & Type System – Full Notes

---

## 🧠 What Are Data Types?

In JavaScript, every value has a **data type** that defines the kind of data it is and what operations you can perform on it.

There are **two main categories** of data types:

### ✅ 1. **Primitive Data Types**

Values that are **copied by value** (not by reference).

* Number
* String
* Boolean
* Null
* Undefined
* Symbol (ES6)
* BigInt (ES2020)

### ✅ 2. **Reference Data Types**

Values that are **copied by reference** (memory address).

* Object
* Array
* Function

---

## 🔹 Primitive Data Types

### 🧮 1. Number

```js
let num1 = 5;
let num2 = 10.66;

console.log(typeof num1); // "number"
```

JavaScript doesn't differentiate between `int` and `float`.

---

### 📝 2. String

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template`;

console.log(typeof str1); // "string"
```

---

### 🔘 3. Boolean

```js
let bool1 = true;
let bool2 = false;

console.log(typeof bool1); // "boolean"
```

---

### 🕳️ 4. Null

```js
let empty = null;
console.log(typeof empty); // ❗ "object" → this is a known JavaScript quirk
```

Used to represent **intentional absence** of value.

---

### 🤷‍♂️ 5. Undefined

```js
let nothing;
console.log(typeof nothing); // "undefined"
```

Declared but **not assigned** any value.

---

### 🔑 6. Symbol (ES6)

```js
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // false (each Symbol is unique)
```

Used to create unique identifiers for object properties.

---

### 🔢 7. BigInt (ES2020)

```js
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"
```

Allows working with very large integers beyond `Number.MAX_SAFE_INTEGER`.

---

## 🔹 Reference Data Types

> 🧠 All reference types are copied by **reference**, not by value.

### 🔁 1. Array

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.pop(); 
console.log(arr1); // [1, 2]
```

---

### 🧱 2. Object

```js
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;

obj2.age = 30;
console.log(obj1.age); // 30
```

---

### ⚙️ 3. Function

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}
```

Functions are **first-class objects**.

---

## 🔁 Type Conversion

### 🔄 String → Number

```js
let str = "123";
console.log(Number(str));    // 123
console.log(+str);           // 123
console.log(parseInt(str));  // 123
console.log(parseFloat(str)); // 123.0
```

---

### 🔄 Number → String

```js
let num = 456;
console.log(String(num));    // "456"
console.log(num + "");       // "456"
console.log(num.toString()); // "456"
```

---

## ⚠️ Type Coercion (Implicit Conversion)

JavaScript automatically converts between types when needed.

```js
console.log("5" + 1); // "51" (number to string)
console.log("5" - 1); // 4   (string to number)
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
```

---

## 💡 Truthy vs Falsy Values

### Falsy values (evaluate to `false` in boolean context):

* `false`
* `0`
* `""` (empty string)
* `null`
* `undefined`
* `NaN`

### All other values are **truthy**.

```js
console.log(Boolean("")); // false
console.log(Boolean(0));  // false
console.log(Boolean("Hi")); // true
```

---

## 🔃 Dynamic Typing in JavaScript

JavaScript is **dynamically typed**, meaning variables can hold values of **any type**, and types can change at runtime.

```js
let a = 10;          // number
a = "Hello";         // string
a = true;            // boolean
a = [1, 2, 3];       // object (array)
```

---

## ❓ typeof Quirks

```js
console.log(typeof null); // "object" ❗ Known JavaScript bug
console.log(typeof NaN);  // "number"
console.log(typeof []);   // "object"
console.log(typeof {});   // "object"
console.log(typeof (() => {})); // "function"
```

---

## 🧪 Type Coercion Examples

```js
console.log("5" + true); // "5true"
console.log("5" - true); // 4
console.log(null + 1);   // 1 (null coerced to 0)
console.log(true + true); // 2
console.log(false - true); // -1
```

---

## 💡 Exercise: parseInt() behavior

```js
console.log(parseInt("123.45")); // 123
console.log(parseInt("007.2"));  // 7
console.log(parseInt("abc123")); // NaN
console.log(parseInt("123abc")); // 123

console.log(isNaN(parseInt("abc123"))); // true
```

---

## ✅ Summary Table

| Concept              | Primitive Types                     | Reference Types                |
| -------------------- | ----------------------------------- | ------------------------------ |
| Stored By            | Value                               | Reference                      |
| Mutability           | Immutable (in most cases)           | Mutable                        |
| Copied When Assigned | A copy of the value                 | A reference to the same object |
| Examples             | Number, String, Boolean, null, etc. | Array, Object, Function        |

---
