let count = 10;

let x = setInterval(function() {
    if (count > 0) {
        console.log(count);
        count--;
    }
    else{
        clearInterval(x);
    }
},5000);