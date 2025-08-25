let a  = document.querySelector('a');

console.dir(a);
// Changing the attribute with href
a.href  = "https://www.google.com/";

// Now I will use setAttribute()

a.setAttribute('href',"https://www.facebook.com/")

// Now to print the attribute with getAttribute()

console.log(a.getAttribute('href'))