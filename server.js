const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

//middleware
app.use(express.json())
app.get('/', (req,res)=>{
    const data = {
        message : 'Welcome to the HomePage of Contact Management System.',
        content : 'This API provides endpoints for managing contacts. You can find the useful links below:',
        links: {
            githubRepository : 'https://github.com/shilpeedalal/mycontacts-backend',
            postmanCollection : 'https://github.com/shilpeedalal/mycontacts-backend/blob/master/mycontacts-backend.postman_collection.json'
        }
    }
    res.json(data)
})
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})