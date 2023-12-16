// const task =[
//     {
//         TodoId:12345,
//         CreatedDate:"2023-11-30",
//         DueDate:"2023-12-01",
//         UserId:1,
//         ListId:2
//     },
//     {
//         TodoId:67890,
//         CreatedDate:"2023-12-02",
//         DueDate:"2023-12-10",
//         UserId:2,
//         ListId:4
//     }

// ];
// let getTask = () => task;
// module.exports={getTask};
const con = require("./db_connect");

async function createTable(){
    let sql =
        `CREATE TABLE IF NOT EXISTS todo (
            

        )`
    
}