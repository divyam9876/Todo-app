// const list =[
//     {
//         ListId:1,
//         Title: "Today tasks list",
//         CreatedDate: "2023-11-30",
//         UserId:1
//     },
//     {
//         ListId:2,
//         Title: "Exam schedule",
//         CreatedDate: "2023-12-01",
//         UserId:3
//     },
//     {
//         ListId:3,
//         Title: "PT schedule",
//         CreatedDate: "2023-11-02",
//         UserId:1
//     }
// ];
// let getList = () => list;
// module.exports={getList};

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
    let listResult = await getUser(tasks.task)
    let sql=`INSERT INTO todolist(Title,CreatedDate) VALUES("${tasks.task}","${tasks.CreatedDate}")`

    await con.query(sql)
    const newList = await getList(tasks.task)
    return newList[0]
    
}

//read
async function readtodo(tasks){
    let listResult = await getList(tasks.task)
    return listResult[0]
} 


//update
async function editTitle(tasks){
    let updatedTitle = await getList(tasks.task)
    let sql = `UPDATE todolist
    SET Title ="${tasks.task}
    WHERE CreatedDate = "${tasks.CreatedDate}"`

    await con.query(sql)
    editTitle = await getList(tasks.task)
    return updatedTitle[0]

}
//delete 
async function deleteTodo(tasks){
    let sql = `DELETE FROM todolist`

    return await con.query(sql)
}

async function getList(tasks){
    let sql =`SELECT * FROM todolist WHERE ListId = ${tasks.listid}`
}

module.exports = {}
