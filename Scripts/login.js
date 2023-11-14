let LoginForm=document.getElementById("loginForm")
if(LoginForm) LoginForm.addEventListener('submit', login)
 
function login(e){
    e.preventDefault()

    let user={
        username: document.getElementById("username").value,
        userpassword: document.getElementById("password").value
    }
    let h3=document.getElementById("greeting")
    h3.innerHTML = `Welcome Back ${user.username}!!`

    window.location.href = "todo.html"
}
//console.log("Hello")