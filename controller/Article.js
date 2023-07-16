const validator = require("validator");
const Article = require("../models/Article");


const save = (req, res) => {

    //Recoger los parametros post a guardar 
    let parametros = req.body;

    //Validar datos
    try {
        let validar_titulo = !validator.isEmpty(parametros.titulo);


        if (!validar_titulo) {
            throw new Error("No se valido la informacion");
        }

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "Error en la validacion"
        });
    }

    //Crear objeto a guardar y asignar valores automatico
    const articulo = new Article(parametros);

    //Guardar articulo en base de datos
    articulo.save()
        .then((articuloGuardado) => {
            return res.status(200).json({
                status: 'success',
                Articulo: articuloGuardado,
                mensaje: 'Articulo creado con exito'
            });
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'error',
                mensaje: 'No se ha guardado el articulo: ' + error.message
            });
        });




}


const listar = (req, res) => {

    Article.find({})
        .then((articulos) => {

            if (!articulos) {
                return res.status(404).json({
                    status: "error",
                    mensaje: "No se han encontrado articulos",
                });

            }

            return res.status(200).send({
                status: "success",
                articulos,
            });

        })

        .catch((error) => {
            return res.status(500).json({
                status: "error",
                mensaje: "Ha ocurrido un error al listar los articulos",
                error: error.message,

            });

        });

};

  
  const findDateName  = (req, res) => {
    const { fecha, titulo } = req.query;
  
    let query = {};
  
    // Verifica si se proporciona la fecha en la consulta
    if (fecha) {
      query.fecha = fecha;
    }
  
    // Verifica si se proporciona el título en la consulta
    if (titulo) {
      query.titulo = titulo;
    }
  
    Article.find(query)
      .then((articulos) => {
        if (!articulos || articulos.length === 0) {
          return res.status(404).json({
            status: 'error',
            mensaje: 'No se han encontrado artículos',
          });
        }
  
        return res.status(200).json({
          status: 'success',
          articulos,
        });
      })
      .catch((error) => {
        return res.status(500).json({
          status: 'error',
          mensaje: 'Ha ocurrido un error al realizar la consulta',
          error: error.message,
        });
      });
  };

module.exports = {
    save,
    listar,
    findDateName
}