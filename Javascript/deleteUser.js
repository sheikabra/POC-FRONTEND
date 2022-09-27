function deletetheuser(){
    console.log("Running")
    let id = parseFloat(document.getElementById('id').value);
    console.log(id + " Was Deleted")
   fetch('http://localhost:8080/removeuser?id=' + id, {
       method: 'DELETE'
   }).then(r  =>(alert(id + " was deleted")))
}


    
