const list =[
    {
        ListId:1,
        Title: "Today tasks list",
        CreatedDate: "2023-11-30",
        UserId:1
    },
    {
        ListId:2,
        Title: "Exam schedule",
        CreatedDate: "2023-12-01",
        UserId:3
    },
    {
        ListId:3,
        Title: "PT schedule",
        CreatedDate: "2023-11-02",
        UserId:1
    }
];
let getList = () => list;
module.exports={getList};