const con = require("./db_connect")

async function createTable(){
    let sql =`
        CREATE TABLE IF NOT EXISTS todolist(
            ListId INT NOT NULL AUTO_INCREMENT,
            Title VARCHAR(255),
            CreatedDate DATE,
            UserId INT NOT NULL,
            CONSTRAINT todolistPK PRIMARY KEY(ListId),
            CONSTRAINT userFK FOREIGN KEY(UserId) REFERENCES users(UserId));`

            await con.query(sql)
}
createTable()


//create
async function createtodo(tasks){
    let listResult = await getList(tasks)
    console.log(listResult)
    let sql=`INSERT INTO todolist(Title,CreatedDate,UserId) VALUES("${tasks.Title}",STR_TO_DATE("${tasks.createdDate}", '%Y-%m-%dT%H:%i:%s.%fZ'),"${tasks.UserId}")`

    // let sql = `INSERT INTO todolist(Title, CreatedDate, UserId) VALUES (?, ?, ?)`;
    // let values = [tasks.Title, tasks.createdDate, tasks.UserId];

    await con.query(sql)
    const newList = await getList(tasks)
    console.log(newList)
    return newList[0]
    
}

//read
async function readtodo(tasks){
    let listResult = await getList(tasks.Title)
    return listResult[0]
    
} 


//update
async function editTitle(tasks){
    let updatedTitle = await getList(tasks)
    if(updatedTitle.length<1) throw  Error("list is not yet created")
    let sql = `UPDATE todolist
    SET Title ="${tasks.Title}"
    WHERE ListId = "${tasks.ListId}"`

    // let sql = `UPDATE todolist
    // SET Title ="${tasks.Title}"
    // WHERE CreatedDate = "${tasks.createdDate}"`

    await con.query(sql)
    editTitle = await getList(tasks)
    return updatedTitle[0]

}
//delete 
async function deleteTodo(tasks){
    let sql = `DELETE FROM todolist WHERE ListId='${tasks.ListId}'`
    // let sql = `DELETE FROM todolist WHERE CreatedDate='${tasks.createdDate}'`
    await con.query(sql)
}

async function getList(tasks){
    let sql =`SELECT * FROM todolist WHERE ListId = '${tasks.ListId}'`
    // let sql =`SELECT * FROM todolist WHERE CreatedDate='${tasks.createdDate}'`
    return await con.query(sql)
}
async function getByUserId(tasks) {
    let sql =`SELECT * FROM todolist WHERE UserId='${tasks.UserId}'`
}

module.exports = {createtodo,readtodo,editTitle,deleteTodo,getList}
