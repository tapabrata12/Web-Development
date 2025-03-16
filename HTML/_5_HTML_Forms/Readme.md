# HTML Forms
## What is a Form ?
- It is a kind of structure which purpose is to collecet user input
## Tags and Elements
- To implement froms we have multiple tags we will look after one by one to them

### `form` Tag
- To create HTML from to take user input
```html
<form>

</form>
```
### `input` Tag
- Helps to take multiple types of user input Ex: Text field, Radio button, Check box, Date field to select date etc
```html
<!-- We have to give the ID and also speacify what type of input should be given -->
<input type="text" id=""> 
```
- In the input tag there are few attributes some of them are
    - `type`: This helps us to defind the what type of input we want from   user
    - `id`: Helps us to uniquely identify each element so that we can call each element individually
    - When we write `type="submit"` means we want to create a button from where all the information will go to the backened server.
    - There is another attribute called `value=""`. The value attribute specifies the value of an ```<input>``` element 
        - For `"button"`, `"reset"`, and `"submit"` - it defines the text on the button
        - For `"text"`, `"password"`, and `"hidden"` - it defines the initial (default) value of the input field
        - For `"checkbox"`, `"radio"`, `"image"` - it defines the value associated with the input (this is also the value that is sent on submit)

```html
id=""
``` 
```html
type=""
```  
```html
value=""
```
### `lable` Tag
- Gives the lable for corresponding input tags so that user can understand what input should be given
- The most important thing is that in every lable there is a `for` attribute and the value of `for` attribute will be equal to the value of the `input` tag `id` attribute.
```html
<label for="">Your Label</label>
```
- In the lebel the `for=""` attribute is to link the label to the input
```html
for=""
```
### Placeholder attribute
- The placeholder attribute specifies a short hint that describes the expected value of an input field (e.g. a sample value or a short description of the expected format)

```html
 <input type="text" id="plc" placeholder="Ex: Ramesh Kumar">
```

### Till now  we have discussed many tags and attributes

- In our form we have 
    - input
    - lebel
    - select 
    - option
    - button
    - textarea
    - fieldset
    - legend 