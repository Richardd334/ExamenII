import {Request, Response} from "express";
import {pool} from "../models/DB";

export const getAll= async (req: Request, res: Response) => { //Crear controlador
    // let respuesta=obtenerProductos();
    // console.log("hola");
    // console.log(respuesta);

    try{
        const [tablas]= await pool.query('select * from productos');
    
        res.status(200).json({
            succes:true,
            data:tablas,
        })
    }catch (error){
        res.status(500).json({
            succes:false,
            message: "Error"
        }) 
    }
        
    

    //return res.status(200).json({message:"UNACH"});
}

