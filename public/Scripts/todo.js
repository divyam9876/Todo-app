let todo=document.getElementById("todoform")
if(todo) todo.addEventListener('submit', Addtask)

function Addtask(e){
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem("user")??[])?.UserId

    let tasks={
        Title:document.getElementById("title").value,
        task:document.getElementById("note").value,
        createdDate: new Date(),
        UserId:user
    }

    let ul = document.getElementById("todoList")
    ul.innerHTML += `<li>${tasks.createdDate} ${tasks.task}</li>`
    document.getElementById('title').value=""
    document.getElementById('note').value=""
    //console.log(tasks)

    fetchData("/list/create",tasks,"POST")
    .then(data =>{
        if(data && !data.message){
            setCurrentTask(data)
        }else{
            console.error("Invalid response from the server:", data)
        }
    })
    .catch(err =>{
        let errorSection = document.querySelector("#todoform .error")
        errorSection.innerText=`Error: ${err.message}`
    })
    function setCurrentTask(tasks){
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
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
}
