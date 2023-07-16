# USD_BNA
API para servir todas las cotizaciones del dolar mediante el BANCO NACION ARGENTINA
Con NodeJS

## Requisitos
- Node JS
- MongoDB

## Instruciones
__Descargar o Clonar repositorio__

__Instalar dependencias (npm install)__
> Ubicate en le directorio que descargaste y via consola o terminal ejecuta el siguiente comando

`npm install` 

> Asegurate que se han instalado estos paquetes

`npm install express --save`
`npm install mongoose --save`
`npm install multer --save`
`npm install validator --save`
`npm install cors --save`
`npm install nodemon --save` 
`npm install cheerio --save` 
`npm install axios --save`   

__Ejecutar el script__
> Ubicate en le directorio que descargaste y via consola o terminal ejecuta el siguiente comando
`npm start`

> Si ves estas lineas en la consola, se ha ejecutado correctamente.
 `APP INICIADA`
`Servidor corriendo en el puerto 3900`
`Conectado a la DB`

> Una vez conectado a la DataBase debes ejecutar el scrip que hace web Scraping a la pagina del banco para obtener los datos y almacenarlos en tu DB.
 `node scrap.js`

> Listo ya puedes realizar consultas en postman o desde el navegador. 
`http://localhost:3900/api/preciosDateName?fecha=16-07-2023&titulo=Euro`
`http://localhost:3900/api/preciosDateName?fecha=16-07-2023`
`http://localhost:3900/api/preciosDateName?titulo=Euro`

Puedes ver el modelo del objeto en models/Article.js

