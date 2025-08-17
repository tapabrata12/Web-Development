// Stop at the first multiple of 7

for(let i = 1; i <= 10; i++) {
    if (i % 7 === 0) {
        console.log("Found multiple of 7: " + i);
        break;
    }
    console.log(i);
}