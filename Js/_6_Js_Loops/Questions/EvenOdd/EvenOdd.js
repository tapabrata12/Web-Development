// Take input from user and tell them if it's a even or odd number

let val = prompt("Enter a number: "); // Remember this function only works in browser

for(let i = 1; i <= val; i++){
    if(i % 2 == 0){
        console.log(i + " is even");
    } else{
        console.log(i + " is odd");
    }
}