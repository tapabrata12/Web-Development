// 1. Select the element

const inp1 = document.querySelector('#inp1');

// 2. Add event listener and tell for any kind of change print typed

inp1.addEventListener("input",function(){
    console.log("typed");
});

const inp2 = document.querySelector('#inp2');

// Ek baat hamesha yadd rakhna agar zinde me kabhi vhi agar '.addEventListener' najar me aye to jaan yee ho function accept karta hai uss funtion me tum details accept kar sakte hoo. woo ek enent type ka object
inp2.addEventListener("input",function(e){
    console.log(e); // Isse woo obj print hoga data print nahi hoga jo ham ne type kiya
});

const inp3 = document.querySelector('#inp3');
// Now Object me se value print karne ke liye data naam ke property me value milegi ussko print karna hai
inp3.addEventListener("input",function(e){
    console.log(e.data); // But Iss me ek problem hai ki agar mai backspace karu to null print ho raha hai but mai chahta ho ki backspace karne par kuch print na ho 
})

const inp4 = document.querySelector('#inp4');

inp4.addEventListener("input",function(e){
    // Ek simple logic lagayenge ki agar e.data null nahi hai tabhi print karenge
    if(e.data !== null){
        console.log(e.data);
    }
});