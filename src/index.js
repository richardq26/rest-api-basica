const express = require("express");
const app = express();
const morgan= require("morgan");


//MIDDLEWARE procesa datos antes que el sv lo reciba
app.use(morgan("dev")); //permite  ver en consola lo que llega al sv


app.use(express.json());//permite al sv recibir json y entenderlos
app.use(express.urlencoded({extended:false})); //entender datos que llegan desde formularios


//SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("json spaces",2);

//Definiendo el puerto
const puerto= app.get("port");

//Rutas
app.use(require("./routes/index"));
app.use('/api/movies',require("./routes/movies"));

app.use('/api/users', require("./routes/users"));


///Empezando el sv
app.listen(puerto, () =>
  console.log("server on port: ", puerto)
);

