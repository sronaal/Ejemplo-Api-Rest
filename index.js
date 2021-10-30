const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");

const app = express();
const port = 7000;

app.use(express.json());
app.use('/api',userRouter);


app.get('/',(req,res) =>{
    res.send("Api Empleados");
});

mongoose.connect("mongodb+srv://admin:admin123@clusterapiempleado.dkt5f.mongodb.net/ApiEmpleado?retryWrites=true&w=majority")

app.listen(port,() => console.log("Servidor activo en el puerto ", port));