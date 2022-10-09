
const form = document.getElementById('formElem');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const prepayload = new FormData(form)

    const payload = new URLSearchParams(prepayload);

    let classDescription = payload.get("classDescription");
    let className = payload.get("className");
    let department = payload.get("department");
    let classNumber = payload.get("classNumber")


    let data = {
        classDescription:classDescription,
        className:className,
        department:department,
        classNumber: classNumber
    }

    fetch('http://localhost:8080/api/v1/addClass', {
        method: "POST",
        headers: {
            "Content-Type":'application/json'
        },
        body: JSON.stringify(data),

    }).then(r=>(alert("Added New Class: " + className)))

})