const { conexion } = require("./database/connection");
const express = require("express");
const puerto = 3900;
const cors = require ("cors");

//Inicializar la app
console.log("APP INICIADA"); 

//Conectar a la base de datos
conexion();


//Crear servidor Node
const app = express();

//Configurar Cors
app.use(cors());

//Convertir Body a objeto JS
app.use(express.json()); //Recibe datos con content-type app/json
app.use(express.urlencoded({extended:true})); //datos por urlencoded

//Rutas 
const rutas_articulo = require("./rutas/article");

//Cargo las RUTAS
app.use("/api", rutas_articulo);


//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+puerto); 
});
