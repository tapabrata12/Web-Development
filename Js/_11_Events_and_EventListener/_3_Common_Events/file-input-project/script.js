btn = document.querySelector("#btn");
input = document.querySelector("#fileinput");

btn.addEventListener('click', () => {
    input.click();
});

input.addEventListener('change', (e) => {

    // btn.textContent = e.target.files[0].name; // This will give error if no file is selected and user clicks cancel button
   
    file = e.target.files[0]
    if(file) {
        btn.textContent = file.name;
    }
});
