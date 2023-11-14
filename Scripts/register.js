let rform = document.getElementById('registrationForm')
if (rform) rform.addEventListener('submit',SignUp)

function SignUp(e){
    e.preventDefault()

    let user={
        firstName:document.getElementById("fName").value,
        lastName:document.getElementById("lName").value,
        username:document.getElementById("userName").value,
        password:document.getElementById("userPassword").value
    }
    let h4=document.getElementById("userdetails")
    h4.innerHTML = `Welcome ${user.firstName} ${user.lastName}`

    window.location.href = "login.html";
}