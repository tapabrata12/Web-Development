// Use Object.entries() to get an array of key-value pairs

Student = {
    Name: "Tapabrata Chowdhury",
    Age: 23,
    isEnrolled: true,
};

Object.entries(Student).forEach(function (params) {
    console.log(params[0]+" : "+params[1]);
});