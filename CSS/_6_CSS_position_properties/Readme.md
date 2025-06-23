
---

## 📌 What is the `position` Property in CSS?

The `position` property in CSS specifies how an element is **positioned in a document**. It determines the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).

It works in conjunction with the **top**, **right**, **bottom**, and **left** properties to offset elements from their respective reference points.

**Syntax:**

```css
selector {
  position: value; /* value can be static, relative, absolute, fixed, or sticky */
}
```

---

## 🔹 `position: relative`

### 📖 Definition:

The element is positioned **relative to its normal position** in the document flow.

### 🌟 Key Features:

* The element **still takes up space** in the normal document flow.
* The `top`, `left`, `right`, and `bottom` properties will **offset** the element from its original position.
* Other elements are **not affected** by the offset.
* Often used as a **reference point for absolutely positioned child elements**.

### ✅ Example:

```css
div {
  position: relative;
  top: 20px;
  left: 30px;
}
```

---

## 🔸 `position: absolute`

### 📖 Definition:

The element is positioned **relative to the nearest positioned ancestor** (i.e., the closest ancestor with `position` set to `relative`, `absolute`, or `fixed`). If there is no such ancestor, it is positioned relative to the `<html>` element (the document body).

### 🌟 Key Features:

* The element is **removed from the normal document flow**.
* It does **not take up space** in the layout.
* Positioned precisely using `top`, `left`, `right`, and `bottom`.
* Can **overlap** other elements.

### ✅ Example:

```css
div {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

---

## 🔸 `position: fixed`

### 📖 Definition:

The element is positioned **relative to the viewport** (the visible area of the browser window). It does not move when the page is scrolled.

### 🌟 Key Features:

* Always **stays in the same place** even when the page is scrolled.
* Useful for **sticky headers**, **menus**, **ads**, etc.
* Completely **removed from the document flow**.
* Can overlap other elements.

### ✅ Example:

```css
div {
  position: fixed;
  top: 0;
  right: 0;
}
```

---

## 🔸 `position: sticky`

### 📖 Definition:

The element behaves like `relative` **until a specified scroll position is reached**, then it behaves like `fixed`.

### 🌟 Key Features:

* Combines the behavior of `relative` and `fixed`.
* **Sticks** to a position when scrolling past a certain threshold.
* Only works when a **scrolling container** (like `overflow: auto` or `scroll`) is present.
* Requires a `top`, `left`, `right`, or `bottom` value to work.

### ✅ Example:

```css
div {
  position: sticky;
  top: 10px;
}
```

---

### 📝 Summary Table:

| Position Type | Takes Space? | Relative To                 | Scrolls with Page | Common Use                |
| ------------- | ------------ | --------------------------- | ----------------- | ------------------------- |
| `relative`    | ✅ Yes        | Its normal position         | ✅ Yes             | Slight shifting or anchor |
| `absolute`    | ❌ No         | Nearest positioned ancestor | ❌ No              | Popups, dropdowns         |
| `fixed`       | ❌ No         | Viewport                    | ❌ No              | Sticky navbars, headers   |
| `sticky`      | ✅ Yes        | Scroll container            | ✅ / ❌             | Section headings, menus   |
