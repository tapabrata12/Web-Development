const box = document.querySelector("#abcd");

// e is called event object: We will get all the information about the event that occurred
// 'click' This is event type, What type of event we want to perform
box.addEventListener("click", (e) => {
  console.log(e);
});

const frm = document.querySelector("form");
frm.addEventListener("submit", (e) => {
    // After submition of the form the default nature is to get reloaded so prevent that we use preventDefault()
  e.preventDefault();
  console.log("Form submitted");
});
