import { Router } from "express";
import { PrendasController } from "../controllers/prenda.controller.js";
import * as db from '../config/db.js'

export const prendaRouter = Router();

prendaRouter.get('/', await PrendasController.ObtenerPrendas);

prendaRouter.post('/prenda', await PrendasController.SubirPrendas)

prendaRouter.put('/prenda', await PrendasController.ActualizarPrenda)

prendaRouter.delete('/prenda', await PrendasController.EliminarPrenda)