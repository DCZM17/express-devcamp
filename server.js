//1. Crear el objeto express
const express = require('express')
//2. Citar las dependenias necesarias para el proyecto 
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const coursesRoutes = require('./routes/CoursesRoutes')


//3. establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
//console.log(process.env.PORT)


//crear el objeto aplicacion
//para el servidor de desarrollo
const app = express()

//rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', coursesRoutes)

//endpoint de aplicacion
app.get('/' , (request , response )=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "reqquest exitosa"
    })
})

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