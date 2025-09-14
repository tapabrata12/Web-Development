// JavaScript form validation involves checking user input in web forms to ensure it meets specified criteria before submission. This client-side validation provides immediate feedback to users, improving the user experience and reducing server load.

form = document.querySelector('form');

Nm = document.querySelector('#name');

form.addEventListener('submit',function (e){
    // This line prevents the form from being submitted why ? because we want to validate the input first if we don't prevent it it will submit the form and reload the page
    e.preventDefault();
    if (Nm.value.length <= 2) {
        document.querySelector('small').style.display = 'initial';
    }
    else{
        document.querySelector('small').style.display = 'none';
    }
});