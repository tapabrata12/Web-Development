let Box = document.querySelector("#abcd");

Box.addEventListener("mouseover",function(){
    Box.style.backgroundColor = "yellow";
});

Box.addEventListener("mouseout",function(){
    Box.style.backgroundColor = "red";
});