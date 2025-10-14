import a from "./app.js"; // As it Export defult thats why we can give any name to import variable

import { userName } from "./app.js"; // Named import must be same as export name, To import we much give curly braces {} for Named Export or lt will give the default export value

console.log(userName);
console.log(a);
console.log("Hello");