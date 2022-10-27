const sequelize = require('./seq')
const colors = require ('colors')

const connectDB = async ()=>{
    try{
    //conectarse a la base de datos 
    await sequelize.authenticate()
    console.log('Conectado a mysql'.bgBlue.green)
}catch (error){
    console.log(error)
}

} 

module.exports = connectDB