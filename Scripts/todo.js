let todoform=document.getElementById("todoform")
if(todoform) todoform.addEventListener('submit', Addtask)

function Addtask(e){
    e.preventDefault()

    let tasks=document.getElementById("note").value
    let todoList = document.getElementById("todoList")

    todoList.innerHTML += `<li>${tasks}</li>`
    // document.getElementById('note').value=""
    // let li = document.createElement('li')
    // li.innerText = tasks
    // todoList.appendChild(li);
}




