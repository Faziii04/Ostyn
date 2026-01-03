import { Router } from "express";
import { PrendasController } from "../controllers/prenda.controller.js";

export const prendaRouter = Router();

prendaRouter.get('/', (req, res) => {
    const prendas = PrendasController.ObtenerPrendas();
    
    // Simplest way: automatically stringifies and sets headers
    res.json(prendas); 
});
