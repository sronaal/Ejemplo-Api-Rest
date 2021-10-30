const express = require("express");
const userSchema = require("../Models/Empleado");
const router = express.Router();

// Peticion creacion Empleado
router.post('/empleado',(req,res) =>{
    const user = userSchema(req.body);

    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error})); 
})

// Monstrar todos los empleados
router.get('/empleado',(req,res) =>{
    
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

// Mostrar Empleado filtrado
router.get('/empleado/:id',(req,res) =>{
    const {id} = req.params;

    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
})


module.exports = router;