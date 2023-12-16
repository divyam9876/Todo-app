//let rform = document.getElementById('registrationForm')
//if (rform) rform.addEventListener('submit',SignUp)
// document.addEventListener('DOMContentLoaded',function(){
let registrationForm=document.getElementById('registrationForm')
if(registrationForm) registrationForm.addEventListener('submit',SignUp)
//})

function SignUp(e){
    e.preventDefault()
    // firstname= document.getElementById("fName").value,
    // lastname= document.getElementById("lName").value,
    // username= document.getElementById("userName").value,
    // password= document.getElementById("userPassword").value

    let user={
        firstName:document.getElementById("fName").value,
        lastName: document.getElementById("lName").value,
        username: document.getElementById("userName").value,
        password:document.getElementById("userPassword").value,
        email:document.getElementById("email").value
    }
    // let h4=document.getElementById("userdetails")
    // h4.innerHTML = `Welcome ${user.firstName} ${user.lastName}`

    fetchData("/users/register",user,"POST")
    .then(data =>{
        if(!data.message){
            setCurrentUser(data)
            window.location.href = "todo.html"
        }
    })
    .catch(err =>{
        let errorSection = document.querySelector("#registrationForm .error")
        errorSection.innerText=err.message
    })
    //console.log(user)
    function setCurrentUser(user){
      localStorage.setItem('user',JSON.stringify(user))
    }
}


  
//userdetails.innerHTML = `Welcome ${user.firstName} ${user.lastName}`
    //window.location.href = "login.html";
