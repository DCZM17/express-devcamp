const sequelize = require('./seq')
const colors = require ('colors')
const {DataTypes} = require('sequelize')

//Crear instancia del modelo user 
const UserModel = require('../models/user')
const User =  UserModel(sequelize, DataTypes)

//definir la funcion de conexion a la base de datos


const connectDB = async ()=>{
    try{
    //conectarse a la base de datos 
    await sequelize.authenticate()
    console.log('Conectado a mysql'.bgBlue.green)
    const jane = await User.create(
        { username: "Karol", 
        email: "karol@misena.edu.co",
        password: "45678"
        });
console.log("Jane's auto-generated ID:", jane.username);

}catch (error){
    console.log(error)
}


} 

connectDB()