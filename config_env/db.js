const mongoose = require('mongoose')

//const uri = 'mongodb+srv://dczapata55:Duvan050617@cluster0.rvln2t2.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'

//componente de conexion a BD
//tipo: funcional 

const connectDB = async() =>{
   const conn = await mongoose.connect(uri , {
    useNewUrlParser : true,
    useUnifiedTopology: true
   })

   console.log(`MongoDB conectado: ${conn.connection.host}`)
}

connectDB()