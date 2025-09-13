// Jis pe event ayega agar ussme Listener nahi hua to hamara event uskke parent listener dhundee gaa aur aasaa karte karte uppor ki taraf move karega 

// Example 1:

const main = document.querySelector('#main');

main.addEventListener('click',function() {
    alert("Button clicked"); // In this case event will bubble stragth check if his parent has any event if found then it will execute and if not then nothing will happend.
});

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    e.target.classList.toggle('line');
});