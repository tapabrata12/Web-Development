let x = setTimeout(function() {
    console.log("Timed hello");
},10000);

clearInterval(x); // Clear the intervals 