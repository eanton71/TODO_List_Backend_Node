//directiva para la codificacion estricta de javascript ECMAScript version 5.
"use strict";

//guardamos en express una referencia a la libreria express citada por require
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//guardamos en app una instancia del
const app = express();

//app hace uso del middleware
app.use(cors());

//implementación en modo desarrollo
app.use(morgan("dev"));

//traduce  json en el body a objetos javascript
app.use(express.json());

//traduce de json url a objectos javascript
app.use(express.urlencoded({ extended: false }));

//importar archivo  de rutas de product.routes
const Products = require("./todos/routes/todo.routes");
//le pasamos como argumento la instancia app al archivo de rutas Products
Products.todoRoutes(app);
//el servidor escuchará  en el puerto 3000 y  ip localhost->127.0.0.1
app.listen(3000, "localhost", () => {
    console.log("Server listening on port %s", 3000);
});