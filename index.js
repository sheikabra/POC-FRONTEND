console.log("Hello World");

const body = document.body;

fetch('http://localhost:8080/allusers')
    .then((response) => response.json())
    .then((data) => body.append( "First Name: " + data[1].firstName + "Last Name" + data[1].lastName  ));