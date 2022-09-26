console.log("Hello World");

// const body = document.body;

fetch('http://localhost:8080/allusers')
    .then((response) => response.json())
    .then((data) => console.log(data));