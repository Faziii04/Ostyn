import { prendasService } from "../services/prenda.service.js";

export const PrendasController = {

    // Obtener prendas del array superior
    async ObtenerPrendas(req, res, next) {
        try {
            const data = await prendasService.ObtenerPrendas();
            res.json(data);
        } catch {
            console.log('Hubo un error en el "PrendasController, ObetnerPrendas"')
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
}

}