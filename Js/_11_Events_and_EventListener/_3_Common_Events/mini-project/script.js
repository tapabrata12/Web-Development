word = document.querySelector('h1');
window.addEventListener('keydown',function(e){
    if(e.key === ' '){
        word.textContent = "Space";
    }
    else{
        word.textContent = e.key;
    }
});