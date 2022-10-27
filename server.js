//1. Crear el objeto express
const express = require('express')
//2. Citar las dependenias necesarias para el proyecto 
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndpoint = require('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')
const userRoutes = require('./routes/UserRoutes')


//3. establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
//crear el objeto aplicacion
//para el servidor de desarrollo
const app = express()
//validemos el objero application para recibir datos en formato json
app.use(express.json())
//conexion a bd
connectDB()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', coursesRoutes)
app.use('/api/v1/users', userRoutes)


//endpoints de dominio
//bootcamp

//imprimir la lista de endpoints validas del proyecto
console.log(listEndpoint(app))

//ejecutar el servidor de desarrollo 
//parametros:
// puerto de escucha - listen
app.listen(process.env.PORT, ()=>{
    console.log(`servidor activo en puerto 5000`.bgBlue.green)
})