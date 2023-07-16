const express = require("express");
const router = express.Router();

const ArticuloControlador = require("../controller/Article"); 



//Rutas
router.post("/crear", ArticuloControlador.save);

router.get("/precios", ArticuloControlador.listar);

router.get("/preciosDateName", ArticuloControlador.findDateName);

module.exports = router;