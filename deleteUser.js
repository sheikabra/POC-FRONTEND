function deletetheuser(){
    let id = parseFloat(document.getElementById('id').value);
    alert(id);
   fetch('http://localhost:8080/removeuser?id=' + id, {
        method: 'DELETE'})
}


    
