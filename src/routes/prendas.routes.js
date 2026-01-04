import { Router } from "express";
import { PrendasController } from "../controllers/prenda.controller.js";
import * as db from '../config/db.js'

export const prendaRouter = Router();

prendaRouter.get('/', await PrendasController.ObtenerPrendas);

prendaRouter.post('/', await PrendasController.SubirPrendas)