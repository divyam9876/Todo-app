//let rform = document.getElementById('registrationForm')
//if (rform) rform.addEventListener('submit',SignUp)

function Login(e){
    e.preventDefault()
    
    username= document.getElementById("username").value,
    password= document.getElementById("password").value

    let user={
        
        username: username,
        password:password
      
    };
    console.log(user);
}

document.addEventListener('DOMContentLoaded',function(){
    let loginForm=document.getElementById('loginForm')
    loginForm.addEventListener('submit',Login)
})
    
    //registrationForm.innerHTML = `Welcome ${user.firstName} ${user.lastName}`


    //window.location.href = "login.html";
