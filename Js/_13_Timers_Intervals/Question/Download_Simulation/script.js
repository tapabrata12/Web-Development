const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const startBtn = document.getElementById("inc");
const stopBtn = document.getElementById("dec");
const Dheading = document.querySelector("p");

let value = 0; 

function update() {
  progress.style.width = value + "%";
  percent.textContent = value + "%";
}

startBtn.addEventListener("click", () => {
  Dheading.textContent = "Dowloading...";
  let x = setInterval(function () {
    if (value < 100) {
      value ++;
      update();
    }

    if (value == 100) {
      Dheading.textContent = "Dowloaded";
    }

    stopBtn.addEventListener("click", () => {
      Dheading.textContent = "Dowloading stopped";
      clearInterval(x);
    });
  }, 10000 / 100);

});