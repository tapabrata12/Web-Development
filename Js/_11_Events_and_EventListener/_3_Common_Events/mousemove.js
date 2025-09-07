let box = document.querySelector("#abcd");
window.addEventListener("mousemove",function(e) {
    box.style.left = e.clientX + "px";
    box.style.top = e.clientY + "px";
});