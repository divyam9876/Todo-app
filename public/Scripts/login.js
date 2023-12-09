// //let rform = document.getElementById('registrationForm')
// //if (rform) rform.addEventListener('submit',SignUp)

// function Login(e){
//     e.preventDefault()
    
//     username= document.getElementById("username").value,
//     password= document.getElementById("password").value

//     let user={
//         username: username,
//         password:password
//     };
//     console.log(user);
// }

// document.addEventListener('DOMContentLoaded',function(){
//     let loginForm=document.getElementById('loginForm')
//     loginForm.addEventListener('submit',Login)
// })
    
//     registrationForm.innerHTML = `Welcome ${user.firstName} ${user.lastName}`
//     window.location.href = "todo.html";

let LoginForm=document.getElementById("loginForm")
if(LoginForm) LoginForm.addEventListener('submit', login)
 
function login(e){
    e.preventDefault()

    let user={
        username: document.getElementById("username").value,
        userpassword: document.getElementById("password").value
    }
    // let h4=document.getElementById("greeting")
    // h4.innerHTML = `Welcome Back ${user.username}!!`

    //window.location.href = "todo.html"

    console.log(user)

    fetchData("/users/login", user, "POST")
    .then(data => {
        if(!data.message) {
        window.location.href = "todo.html"
        }
    })
    .catch(err => {
        let errorSection = document.querySelector("#loginForm .error")
        errorSection.innerText = err.message
        document.getElementById("username").value = ""
        document.getElementById("password").value = ""
    })
    }


    // Fetch method implementation:
    async function fetchData(route = '', data = {}, methodType) {
        const response = await fetch(`http://localhost:3000${route}`, {
            method: methodType, // *POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        });
        if(response.ok) {
            return await response.json(); 
        } else {
            throw await response.json();
        }
} 
//console.log("Hello")
