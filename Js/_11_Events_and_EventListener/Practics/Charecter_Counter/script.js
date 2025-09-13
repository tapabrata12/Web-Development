inp = document.querySelector("#inp");

spancount = document.querySelector("span");
spancount.textContent = 0;

inp.addEventListener("input", () => {
    console.log(inp.value);
    spancount.textContent = inp.value.length;
});
