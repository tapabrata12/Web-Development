let form = document.querySelector('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let e = document.querySelector("#emailerror");
let p = document.querySelector("#passworderror");
let result = document.querySelector('.result');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passworderror").textContent = "";
    result.textContent = "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let Eans = emailRegex.test(email.value);
    // console.log(Eans);
    if (!Eans) {
        result.style.display = 'none';
        e.style.display = 'initial';
        document.querySelector("#emailerror").textContent = "Invalid Email";
    } else{
        e.style.display = 'none';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let Pans = passwordRegex.test(password.value);
    // console.log(Pans);
    if (!Pans) {
        result.style.display = 'none';
        p.style.display = 'initial';
        document.querySelector("#passworderror").textContent = "Invalid Password";
    } else{
        p.style.display = 'none';
    }

    if (Eans && Pans) {
        
        // console.dir(result);
        result.style.color = 'green';
        result.style.display = 'initial';
        result.textContent = "Account created Successfully";
    }
})