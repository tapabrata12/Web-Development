const li = document.querySelectorAll('li');

console.dir(li);


for (let index = 1; index < li.length; index+=2) {
    
    li[index].classList.add('highlight');

}