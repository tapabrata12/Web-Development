
---

## 🎨 CSS Background Properties

CSS background properties allow you to control the background effects of elements. You can use them individually or combine them in shorthand.

---

### 1️⃣ **`background-attachment`**

#### Defines:  
Whether the background image scrolls with the page or stays fixed.

#### Values:
- `scroll` (default): Background scrolls with the content.
- `fixed`: Background stays in place even when scrolling.
- `local`: Background scrolls with the element’s content.

#### Example:
```css
body {
  background-image: url('bg.jpg');
  background-attachment: fixed;
}
```

---

### 2️⃣ **`background-image`**

#### Defines:  
Sets an image as the background of an element.

#### Syntax:
```css
background-image: url("image.jpg");
```

#### Notes:
- You can use `none` to remove any background image.
- Can also support multiple background layers, separated by commas.

#### Example:
```css
div {
  background-image: url("pattern.png");
}
```

---

### 3️⃣ **`background-position`**

#### Defines:  
The starting position of the background image.

#### Common Values:
- Keywords: `left`, `right`, `center`, `top`, `bottom`
- Percentages: `50% 50%` (center)
- Length units: `10px 20px`

#### Examples:
```css
background-position: top right;
background-position: 50% 50%;
```

---

### 4️⃣ **`background-repeat`**

#### Defines:  
Whether and how the background image repeats.

#### Values:
- `repeat` (default): Repeats both horizontally and vertically.
- `repeat-x`: Repeats horizontally only.
- `repeat-y`: Repeats vertically only.
- `no-repeat`: No repetition.
- `space`, `round`: Special options to space or scale the pattern.

#### Example:
```css
background-repeat: no-repeat;
```

---

### 5️⃣ **`background-size`**

#### Defines:  
The size of the background image.

#### Values:
- `auto`: Original image size.
- `cover`: Scale to cover the entire element (may crop).
- `contain`: Scale to fit entirely inside the element (no crop).
- Specific sizes: `100px 200px`, `50% 50%`

#### Example:
```css
background-size: cover;
```

---

### 🧾 Shorthand Syntax:

You can combine most background properties using the shorthand:
```css
background: url("bg.jpg") no-repeat center center / cover fixed;
```

This is equivalent to:
```css
background-image: url("bg.jpg");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
background-attachment: fixed;
```

---
