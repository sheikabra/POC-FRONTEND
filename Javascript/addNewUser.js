
    const form = document.getElementById('formElem');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const prepayload = new FormData(form)

    const payload = new URLSearchParams(prepayload);

    let fname = payload.get("firstName");
    let lname = payload.get("lastName");
    let eml = payload.get("email");
    let pswd = payload.get("password");

    console.log(eml)
    console.log(pswd)

    let data = {
        firstName:fname,
        lastName:lname,
        email:eml,
        password: pswd
    }

    fetch('http://localhost:8080/api/v1/registration', {
        method: "POST",
        headers: {
            "Content-Type":'application/json'
        },
        body: JSON.stringify(data),

    }).then(r=>(alert("Added New User: " + eml)))

})