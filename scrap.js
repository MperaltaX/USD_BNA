const axios = require('axios');
const cheerio = require('cheerio');
const ip = 'http://localhost:3900';

async function getHTML() {
  try {
    const response = await axios.get('https://www.bna.com.ar/Personas');
    return response.data;
  } catch (error) {
    console.error('Error al obtener el HTML:', error);
    return null;
  }
}


// Llama a la función para obtener el HTML de la página
getHTML()
  .then(html => {
    if (html) {
      const $ = cheerio.load(html);

      // Encuentra la tabla y recorre cada fila
      $('table.table.cotizacion tbody tr').each(async (index, element) => {
        const columns = $(element).find('td');

        // Extrae los datos de cada columna
        const titulo = $(columns[0]).text().trim();
        const compra = $(columns[1]).text().trim();
        const venta = $(columns[2]).text().trim();

        // Crea el objeto con los datos a enviar
        const data = {
          titulo: titulo,
          compra: compra,
          venta: venta
        };

        try {
          // Realiza la solicitud POST a la API para guardar los datos
          const response = await axios.post(ip+'/api/crear', data);
          console.log('Datos guardados en MongoDB:', response.data);
        } catch (error) {
          console.error('Error al guardar los datos:', error);
        }
      });
    }
  });
