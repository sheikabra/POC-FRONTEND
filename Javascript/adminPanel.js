

// const body = document.body;

// fetch('http://localhost:8080/allusers')
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 
    

const body = document.body;
for(let i=0; i<2;i++){
     const response = fetch('http://localhost:8080/allusers')
     .then((response) => response.json())
     .then((data) => body.append(`First Name: ${data[i].firstName} Last Name: ${data[i].lastName}`));
}

// const body = document.body;
// let jsondata;    
// fetch('http://localhost:8080/allusers').then(
//         function(u){ return u.json();}
//       ).then(
//         function(json){
//           jsondata = json;
//         }


// for (let i = 0; i<json[0]; i++) {
//      body.append("First Name: " + jsondata[i].firstName + " Last Name: " + jsondata[i].lastName + "\n")
// }