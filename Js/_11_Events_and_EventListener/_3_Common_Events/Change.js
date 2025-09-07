const op = document.querySelector("select");
device = document.querySelector("#dvc");

// To change we are using change event
op.addEventListener("change",function(e) {
    device.textContent = `${e.target.value} is selected`;
});