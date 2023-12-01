const express = require('express')
const app = express()
const path = require('path')

app.use(express.json());

const userRoutes = require('./server/routes/user')
//route to at least one other entity that is NOT user/customer/etc.
const todolistRoute = require('./server/routes/todolist')
const todoRoute = require('./server/routes/todo')

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use('/users', userRoutes)
// app.use for routes above
app.use('/list', todolistRoute)
app.use('/task', todoRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))

