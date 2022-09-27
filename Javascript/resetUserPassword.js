const form = document.getElementById('formElem');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const prepayload = new FormData(form)

    const payload = new URLSearchParams(prepayload);

    let eml = payload.get("email");
    let pswd = payload.get("password");

    console.log(eml)
    console.log(pswd)
    let data = {
        email:eml,
        password: pswd
    }

    fetch('http://localhost:8080/api/v1/resetpassword', {
        method: "POST",
        headers: {
            "Content-Type":'application/json'
        },
        body: JSON.stringify(data),

    }).then(r=>(alert("Updated Password for user: " + eml)))

})