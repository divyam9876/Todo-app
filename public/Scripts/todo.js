// //let rform = document.getElementById('registrationForm')
// //if (rform) rform.addEventListener('submit',SignUp)

// function Todo(e){
//     e.preventDefault()
    
//     note= document.getElementById("note").value
//     let user={
//         note: note
//     };
//     console.log(user);
// }

// document.addEventListener('DOMContentLoaded',function(){
//     let todoform=document.getElementById('todoform')
//     todoform.addEventListener('submit',Todo)
// })
    
//     //registrationForm.innerHTML = `Welcome ${user.firstName} ${user.lastName}`
//     //window.location.href = "login.html";


let todo=document.getElementById("todoform")
if(todo) todo.addEventListener('submit', Addtask)

function Addtask(e){
    e.preventDefault()

    let tasks={
        task:document.getElementById("note").value}

    let ul = document.getElementById("todoList")
    ul.innerHTML += `<li>${tasks.task}</li>`
    document.getElementById('note').value=""
    // let ul = document.createElement('ul')
    // ui.innerText = tasks
    // todoList.appendChild(li);
    console.log(tasks)
}


