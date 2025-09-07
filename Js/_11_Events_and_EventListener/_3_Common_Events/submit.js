const form = document.querySelector("form");
const main = document.querySelector("main");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // create card
  let card = document.createElement("div");
  card.classList.add("card");
  let pic = document.createElement("div");
  pic.classList.add("pic");
  card.appendChild(pic);
  let img = document.createElement("img");
  img.setAttribute("src", inp[3].value);
  pic.appendChild(img);
  let h3 = document.createElement("h3");
  h3.textContent = inp[0].value;
  card.appendChild(h3);

  let h5 = document.createElement("h5");
  h5.textContent = inp[1].value;
  card.appendChild(h5);
  let p = document.createElement("p");
  p.textContent = inp[2].value;
  card.appendChild(p);
  main.appendChild(card);

  // clear the input fields except submit button
  inp.forEach((element) => {
    if (element.type !== "submit") {
      element.value = "";
    }
  });
});
