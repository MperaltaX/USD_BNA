const  { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
    titulo: {
        type: String, 
        required: true
    },
    compra: {
        type: String, 
        required: true
    },
    venta: {
        type: String, 
        required: true
    },
    fecha: {
        type: String,
        default: () => {
          const date = new Date();
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${day}-${month}-${year}`;
        }
      }/*,
    image: {
        type: String, 
        default: "default.png"
    },
    contenido: {
        type: String, 
        required: true
    },*/
});

module.exports = model("Article", ArticleSchema, "articles");