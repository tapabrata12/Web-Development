// Skip at the multiples of 3

for(let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
       continue;
    }
    console.log(i);
}