import express from 'express';
import dotenv from "dotenv";
import {productosRoutes} from "./routes/index";
import { pool } from "./models/DB" 

dotenv.config({path:"/home/taller4v/productos/src/.env"}); //especificacion del puerto


const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('¡Productos!');       //Principal
});

app.use("/productos", productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

async function obtenerProductos(){
  try{
    const [tablas]= await pool.query('select * from productos');
    console.log(tablas);

  }catch (error){
    console.error('Error obteniendo productos', error);
  }
}

obtenerProductos();

// import express from "express";
// import dotenv from "dotenv";
// import rutas from "./routes/Routes";