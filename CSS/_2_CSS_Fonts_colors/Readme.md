# **CSS Fonts & Color (Brief Overview)**  

## **1. Fonts in CSS**  
CSS allows you to style text using different font properties:  
- **`font-family`**: Sets the font (e.g., `Arial, sans-serif`).  
- **`font-size`**: Controls text size (e.g., `16px`, `1.2em`).  
- **`font-weight`**: Adjusts boldness (`normal`, `bold`, `700`).  
- **`font-style`**: Sets italic (`italic`, `normal`).  
- **`font-variant`**: Small caps (`small-caps`).  
- **`line-height`**: Controls spacing between lines (`1.5`, `20px`).  

**Example:**  
```css
p {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
```
### **CSS Font Properties – Explained with Example**  

Here’s a breakdown of the font-related CSS properties you mentioned, along with their usage:

---

### **1. `font-style`**  
Controls the italicization of text.  
- **Values:** `normal`, `italic`, `oblique`  
```css
p { font-style: italic; } /* Makes text italic */
```

---

### **2. `font-size`**  
Sets the size of the text.  
- **Units:** `px` (pixels), `em`, `rem`, `%`, etc.  
```css
h1 { font-size: 20px; } /* Sets text to 20 pixels */
```

---

### **3. `font-family`**  
Defines the font face (e.g., Arial, Times New Roman, custom fonts).  
- Always provide fallback fonts (e.g., `sans-serif`).  
- **`cursive`** is a generic font family (browser-dependent).  
```css
body { font-family: "Comic Sans MS", cursive, sans-serif; }
```

---

### **4. `font-weight`**  
Controls boldness (thickness) of text.  
- **Common values:** `normal (400)`, `bold (700)`, `lighter`, `bolder`, or `100–900`.  
- **Note:** `font-weight: 90;` is **invalid** (must be multiples of 100, e.g., `100`, `200`, up to `900`).  
```css
strong { font-weight: bold; } /* OR font-weight: 700; */
```

---

### **5. `line-height`**  
Sets the spacing between lines of text.  
- **Values:** Unitless (e.g., `1.5`), `px`, `em`, etc.  
- Helps improve readability.  
```css
p { line-height: 20px; } /* Fixed spacing */
p { line-height: 1.5; } /* Relative to font size (better for responsiveness) */
```

---

### **Complete Example**  
```css
.text-style {
  font-style: italic;      /* Italic text */
  font-size: 20px;         /* 20-pixel font */
  font-family: cursive, sans-serif; /* Fallback to sans-serif */
  font-weight: 400;        /* Normal weight (not 90) */
  line-height: 1.5;        /* 1.5 times font size */
}
```
### **Importing Fonts from Google Fonts into a CSS File**

Google Fonts provides a simple way to add web fonts to your projects. Here's how to import and use them in your CSS:

## Method 1: Using the @import rule (in CSS)

1. **Select your font(s)** on [Google Fonts](https://fonts.google.com/)
2. **Choose the styles** you need (regular, bold, italic, etc.)
3. **Copy the @import code** from the "Embed" section

Example:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

4. **Add it at the top of your CSS file** (before any other rules)
5. **Apply the font** to elements:
```css
body {
  font-family: 'Roboto', sans-serif;
}
```

## Method 2: Using the link tag (in HTML)

Alternatively, you can add the font via HTML:

1. Copy the `<link>` code from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
```

2. Place it in your HTML's `<head>` section

3. Then reference it in your CSS:
```css
h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
}
```

## Best Practices

- Only import the weights and styles you actually need to reduce page load time
- Always include fallback fonts (like `sans-serif`) in your font-family declaration
- Consider using `font-display: swap` to prevent invisible text during loading
- For performance, you might want to self-host fonts in production

## Example with Multiple Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@300;500&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}

h1, h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}
```

Remember that imported fonts are loaded from Google's servers, so your page will need an internet connection to display them properly.
### **Key Notes:**  
- **`font-weight: 90` is invalid** → Use `100–900` (in increments of 100).  
- **`cursive`** may render differently across browsers (better to specify a real font like `"Comic Sans MS"`).  
- **`line-height: 20px`** is fixed, while unitless (`1.5`) scales with `font-size`.  


## **2. Colors in CSS**  
You can define colors in multiple ways:  
- **Named Colors**: `red`, `blue`, `green`.  
- **Hexadecimal**: `#FF5733` (Red-Green-Blue values).  
- **RGB/RGBA**: `rgb(255, 87, 51)` or `rgba(255, 87, 51, 0.5)` (with transparency).  
- **HSL/HSLA**: `hsl(12, 100%, 60%)` (Hue-Saturation-Lightness).  

**Example:**  
```css
h1 {
  color: #FF5733;        /* Hex */
  background-color: rgba(0, 0, 255, 0.2); /* Semi-transparent blue */
}
```  
### **CSS Colors: A Comprehensive Guide**

CSS provides several ways to specify colors for text, backgrounds, borders, and other elements. Understanding these methods is essential for web design and development.

## 1. Basic Color Types

### a. Named Colors
CSS provides 140+ predefined color names that are easy to remember.

```css
p {
  color: red;
  background-color: aqua;
  border-color: darkgoldenrod;
}
```

Common named colors: `black`, `white`, `red`, `green`, `blue`, `yellow`, `purple`, `gray`, `orange`, `pink`, etc.

### b. Hexadecimal Colors
6-digit or 3-digit hex codes representing RGB values.

```css
div {
  color: #ff0000; /* red */
  background-color: #00ff00; /* green */
  border-color: #0000ff; /* blue */
  
  /* Shorthand 3-digit version */
  color: #f00; /* same as #ff0000 */
}
```

### c. RGB and RGBA
Red, Green, Blue with optional Alpha (transparency) channel.

```css
h1 {
  color: rgb(255, 0, 0); /* red */
  background-color: rgba(0, 255, 0, 0.5); /* green with 50% opacity */
}
```

- Values range from 0-255 for RGB
- Alpha ranges from 0 (transparent) to 1 (opaque)

### d. HSL and HSLA
Hue, Saturation, Lightness with optional Alpha.

```css
button {
  color: hsl(120, 100%, 50%); /* pure green */
  background-color: hsla(240, 100%, 50%, 0.3); /* blue with 30% opacity */
}
```

- Hue: 0-360 (color wheel degrees)
- Saturation: 0-100% (intensity)
- Lightness: 0-100% (0% black, 100% white)

## 2. Advanced Color Features

### a. currentColor Keyword
References the current `color` value of the element.

```css
div {
  color: blue;
  border: 2px solid currentColor; /* border will be blue */
}
```

### b. System Colors
Colors that match the user's system theme.

```css
body {
  background-color: ButtonFace; /* matches system button color */
  color: WindowText; /* matches system window text color */
}
```

Note: These are being replaced by CSS Color Module Level 4's `system-ui` colors.

### c. Transparent Keyword
Fully transparent color (equivalent to `rgba(0,0,0,0)`).

```css
.modal {
  background-color: transparent;
}
```

## 3. CSS Color Functions (Level 4)

### a. color()
Allows colors from different color spaces.

```css
.element {
  color: color(display-p3 1 0 0); /* Wide-gamut red */
}
```

### b. lab() and lch()
Perceptually uniform color spaces.

```css
.text {
  color: lab(56% 45 -10); /* LAB color */
  background: lch(56% 45 275); /* LCH color */
}
```

### c. oklab() and oklch()
Improved perceptual uniformity.

```css
.highlight {
  color: oklab(70% 0.1 0.1);
}
```

## 4. Color Manipulation Functions

### a. color-mix()
Mixes two colors in specified proportions.

```css
.blend {
  background: color-mix(in srgb, blue 30%, yellow);
}
```

### b. color-contrast()
Automatically selects the color with best contrast.

```css
.text {
  color: color-contrast(white vs black, darkblue, red);
}
```

### c. Lighten/Darken Functions
```css
.button {
  background: hsl(from var(--main-color) h s calc(l + 10%));
}
```

## Browser Support

- All modern browsers support hex, RGB, HSL, and named colors
- CSS Color Level 4 features have varying support (check caniuse.com)
- Always provide fallbacks for newer color functions

Understanding CSS colors gives you precise control over your website's appearance while ensuring accessibility and visual consistency.