
let theUserSection = document.querySelector("section");
let theUserTable = document.getElementById("tableBody");


    axios.get('http://localhost:8080/allusers').then((res) => {
    for (let i = 0; i < res.data.length; i++) {

        const theId = document.createElement('h2');
        const firstName =  document.createElement("h3");
        const lastName =  document.createElement("h3");
        const email =  document.createElement("h4");
        const role =  document.createElement("h5");
        const pass =  document.createElement("h6");
        const aBreak = document.createElement("br")

        theId.innerText = "USER ID: " + res.data[i].id;
        firstName.innerHTML = res.data[i].firstName;
        lastName.innerHTML = res.data[i].lastName;
        email.innerHTML = res.data[i].email;
        role.innerHTML = "ROLE: " +res.data[i].appUserRole;
        pass.innerHTML = res.data[i].password;

        theUserSection.append(theId);
        theUserSection.append(role);
        theUserSection.append(firstName);
        theUserSection.append(lastName);
        theUserSection.append(email);
        theUserSection.append(pass);
        theUserSection.append(aBreak);

    }

    //    for(let i = 0; i < res.data.length; i++){
    //        theUserTable.append(
    //            document.createElement("tr"),
    //            document.createElement("th").innerHTML,
    //            document.createElement("td").innerText= res.data[i].firstName,
    //            document.createElement("td").innerText= res.data[i].lastName,
    //            document.createElement("td").innerText= res.data[i].email,
    //
    //        );
    // }

})

// const body = document.body;

// fetch('http://localhost:8080/allusers')
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 
    

// const body = document.body;
// for(let i=0; i<2;i++){
//      const response = fetch('http://localhost:8080/allusers')
//      .then((response) => response.json())
//      .then((data) => body.append(`First Name: ${data[i].firstName} Last Name: ${data[i].lastName}`));
// }




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