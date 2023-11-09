const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

//middleware
app.use(express.json())
app.get('/', (req,res)=>{
    res.send("This is HomePage for the Contact Management System project. This project has only backend. Here is the github link and also postman collections link.")
})
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})