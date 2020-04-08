//----------------------------------------------Seteo inicial------------------------------------------
//Requires:
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

//Seteo de las librerias

const app = express();

//Conexion de la base de datos
mongoose.connect("DATABASE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//seteo de EJS
app.set('view engine', 'ejs');

//Seteo de Body-Parser
app.use(bodyParser.urlencoded({
    extended: true
}));

//se setea la carpeta de recursos
app.use(express.static("public"));

//----------------------------------------------Schemas de DB------------------------------------------


//---------------------------------------------Logica--------------------------------------------------




//--------------------------------------------Listen en los puertos-------------------------------------

let port = process.env.PORT
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server running on port " + port);

});
