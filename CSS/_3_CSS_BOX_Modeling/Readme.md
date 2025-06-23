
---

## 📏 Width & Height in CSS

### Definition:
- The `width` and `height` properties in CSS are used to set the dimensions of an element's **content box** (not including padding, border, or margin).

### Syntax:
```css
selector {
  width: 300px;
  height: 150px;
}
```

### Values:
- `auto`: Default value. The browser calculates the width or height.
- `%`: Relative to the parent element's dimensions.
- `px`, `em`, `rem`, `vw`, `vh`: Common units used.

### Important Notes:
- If `box-sizing` is not set to `border-box`, the `width` and `height` do **not** include padding and border.
- If content exceeds the specified height or width, use `overflow: auto`, `hidden`, or `scroll`.

---

## 📦 Introduction to CSS Box Model

### What is the Box Model?
- Every HTML element is considered a box.
- The **CSS Box Model** describes how the size of these boxes is calculated and how elements are spaced in the document.
  
It consists of:
```
| Margin |
| Border |
| Padding |
| Content |
```

---

## 🧱 Box Model Explained

### a) **Content**
- The actual content like text, images, etc.
- `width` and `height` directly apply to this area by default.
  
### b) **Padding**
- Space **inside** the element between the content and border.
- It increases the total size of the element (unless using `box-sizing: border-box`).

#### Most Used Padding Properties:
```css
padding: 10px;                /* All sides */
padding: 10px 15px;           /* Top & Bottom | Left & Right */
padding: 10px 15px 5px;       /* Top | Left & Right | Bottom */
padding: 10px 15px 5px 20px;  /* Top | Right | Bottom | Left */

padding-top: 10px;
padding-right: 15px;
padding-bottom: 5px;
padding-left: 20px;
```

### c) **Border**
- A line around the padding (and content).
- Can have width, style, and color.

#### Most Used Border Properties:
```css
border: 1px solid black;       /* Width | Style | Color */
border-top: 2px dashed red;
border-radius: 5px;            /* Rounded corners */
border-width: 2px;
border-style: dotted;
border-color: blue;
```

### d) **Margin**
- Space **outside** the border; creates space between elements.

#### Most Used Margin Properties:
```css
margin: 20px;                  /* All sides */
margin: 10px 15px;             /* Top & Bottom | Left & Right */
margin: 10px 15px 5px 20px;    /* Top | Right | Bottom | Left */

margin-top: 10px;
margin-right: 15px;
margin-bottom: 5px;
margin-left: 20px;

margin: auto;                  /* Centering (especially horizontally) */
```

---

## 🌐 Universal Selector (`*`)

### Purpose:
- Selects **all elements** on the page.

### Common Use Case:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Explanation:
- `margin: 0;` removes default margin from all elements.
- `padding: 0;` removes default padding.
- `box-sizing: border-box;` changes the box model so that `width` and `height` include **padding and border**.
  - Makes layout calculations easier and more predictable.

---