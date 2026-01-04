import * as db from '../config/db.js'

export const prendasService = {
    
    async ObtenerPrendas() {
        const queryString =
        'SELECT *' +
        'FROM prendas';

        const { rows } = await db.query(queryString)
        return rows
    },

    async SubirPrendas(prenda) {

        const queryString = 
        'INSERT INTO prendas (nombre, tela, color, talla, costo, stock_actual)' +
        'VALUES ($1, $2, $3, $4, $5, $6)' +
        'RETURNING *;'

        const values = [
            prenda.nombre,
            prenda.tela,
            prenda.color,
            prenda.talla,
            prenda.costo,
            prenda.stock_actual
        ]

        const { rows } = await db.query(queryString, values)
        return rows;
    }
}