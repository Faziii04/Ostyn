import { prendasService } from "../services/prenda.service.js";

export const PrendasController = {

    // Obtener prendas del array superior
    async ObtenerPrendas(req, res, next) {
        try {
            const data = await prendasService.ObtenerPrendas();
            res.json(data);
        } catch(error) {
            console.log('Hubo un error en el "PrendasController, ObetnerPrendas"')
            res.status(500).json({ message: "Error interno del servidor" });
        }
    },
    
    //Subir 1 prenda mandando req.body como parametro
    async SubirPrendas(req, res, next) {
        try {
            const prenda = req.body;
            const ans = await prendasService.SubirPrendas(prenda);

            if (ans != null) {
            // Se usa una coma para separar las propiedades del objeto
                return res.json({ 
                    message: "Prenda subida con exito",
                    data: ans // Guardamos la respuesta en la clave 'data'
            });
            } else {
                // Es buena práctica manejar el caso donde ans sea null
                return res.status(400).json({ message: "No se pudo subir la prenda" });
            }
        } catch (error) {
            console.log('There was an error at "PrendasController, SubirPrendas"', error);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    },

    async ActualizarPrenda(req, res, next) {
        try {
            const prenda = req.body;
            const ans = await prendasService.ActualizarPrenda(prenda)

            if (ans != null) {
                res.json({
                    message: "Prenda actualizada con exito",
                    data: ans
                })
            }
            else {
                return res.status(400).json({ message: "No se pudo subir la prenda" });
            }
        } catch (error) {
            console.log('Error at PrendasController, ActuzalizarPrenda', error)
            res.status(500).json({ message: "Error interno del servidor"})
        }
    },

    async EliminarPrenda(req, res, next) {
        try {
            const row = await prendasService.EliminarPrenda(req.body.id);

            if (!row) {
                return res.status(404).json({ message: "Prenda no encontrada" });
            }

            res.json({ 
                message: "Dato aliminado",
                data: row
            })

        } catch (error) {
            console.log("Error at prenda.controller.js , EliminarPrenda()", error)
            res.status(500).json({ message: "Error interno del servidor"})
        }
    }


}