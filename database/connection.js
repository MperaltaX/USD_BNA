const mongoose = require("mongoose");

const conexion = async() =>{
    try {

       await mongoose.connect("mongodb://localhost:27017/mi_blog"); 
       console.log("Conectado a la DB");

    }catch(error){
        console.log(error);
        throw new Error ("No se ha podido conectar a la DB.")
    }
}

module.exports = {
    conexion
}