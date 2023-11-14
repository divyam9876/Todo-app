//let rform = document.getElementById('registrationForm')
//if (rform) rform.addEventListener('submit',SignUp)

function SignUp(e){
    e.preventDefault()
    firstname= document.getElementById("fName").value,
    lastname= document.getElementById("lName").value,
    username= document.getElementById("userName").value,
    password= document.getElementById("userPassword").value

    let user={
        firstName:firstname,
        lastName: lastname,
        username: username,
        password:password
      
    };
    console.log(user);
}

document.addEventListener('DOMContentLoaded',function(){
    let registrationForm=document.getElementById('registrationForm')
    registrationForm.addEventListener('submit',SignUp)
})
    
    //registrationForm.innerHTML = `Welcome ${user.firstName} ${user.lastName}`


    //window.location.href = "login.html";
