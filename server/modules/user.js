const users = [
    {
        UserId: 1,
        UserName: "abcd123",
        Password: "321dcba",
        FirstName: "abcd",
        LastName: "123"
    },
    {
        UserId: 2,
        UserName: "efgh456",
        Password: "654hgfe",
        FirstName: "efgh",
        LastName: "456"
    },
    {
        UserId: 3,
        UserName: "ijkl789",
        Password: "987lkji",
        FirstName: "ijkl",
        LastName: "789"
    }
];

let getUsers = () => users;

module.exports={getUsers};