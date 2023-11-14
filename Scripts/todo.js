//let rform = document.getElementById('registrationForm')
//if (rform) rform.addEventListener('submit',SignUp)

function Todo(e){
    e.preventDefault()
    
    
    note= document.getElementById("note").value

    let user={
        
        note: note
      
    };
    console.log(user);
}

document.addEventListener('DOMContentLoaded',function(){
    let todoform=document.getElementById('todoform')
    todoform.addEventListener('submit',Todo)
})
    
    //registrationForm.innerHTML = `Welcome ${user.firstName} ${user.lastName}`


    //window.location.href = "login.html";
