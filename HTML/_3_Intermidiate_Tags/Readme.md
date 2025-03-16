# Div Tag Lists and Anchor Tag Variations

**Before starting let's discuss about emmet**
- 

- Emmet is softwere plugin to write HTML code faster manner with using shortcuts

Examples:
- Write anchor tag in paragraph tag with the help of emmet

```emmet
p>a
```
- Write 4 Parahraph tags eatch other 

```emmet
p>p>p>p
```
- Heading and paragraph One after other

```emmet
h1+p
```
- Write something in p tag with emmet

```emmet
p{Hello world}
```
## Lets Dicuss the elements

- `id` element
    - This element is needed to to identy other element uniquely
    ```emmet
    p#paragraph
    ```
    **Output**
    ```html
    <p id="paragraph"></p>
    ```
- `class` element
    - Class is an parent element used to group elements. Contains multiple tags or elements
    - Example 1:
    ```emmet
    p.p_class
    ```
    **Output**
    ```html
    <p class="p_class"></p>
    ```
    - Example 2:
    ```emmet
    p.class1.class2.class3
    ```
    **Output**
    ```html
     <p class="class1 class2 class3"></p>
    ```
## `div` Tag
- This is nothing but a container tag which helps us to group of HTML code.

## Inline & Block Elements


### Block Elements:
- Comes with a next line
- Takes Left to right full width of screen

### Inline Elements:
- Comes with the same line 
- Takes only the nececery width of the screen
- We can convert Block to Inline and vice versa with
```css
display: block
```
```css
display: inline
```
# Home Work

- Read About Inline and Block Elements [Block Elements](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content) | [Inline Elements](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content)