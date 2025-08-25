let img = document.createElement('img')
img.setAttribute('src',"https://images.unsplash.com/photo-1554331808-4e46e8ee8041?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

img.classList.add("placeholder");
document.querySelector('body').prepend(img);