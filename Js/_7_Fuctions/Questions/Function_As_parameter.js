function function2(fun) {
    fun();   
}

function name() {
    console.log("Hello");
}

function2(name);

function2(function() {
    console.log("Hi");
})