import * as db from '../config/db.js'

export const prendasService = {
    
    async ObtenerPrendas() {
        const queryString = `
        SELECT * FROM prendas 
        ORDER BY id;
    `;

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
        return rows || null;
    },

    async ActualizarPrenda(prenda) {
        const queryString = `
            UPDATE prendas
            SET nombre = $1, tela = $2, color = $3, talla = $4, costo = $5, stock_actual = $6
            WHERE id = $7
            RETURNING *;`

        const values = [
            prenda.nombre,
            prenda.tela,
            prenda.color,
            prenda.talla,
            prenda.costo,
            prenda.stock_actual,
            prenda.id
        ]

        const { rows } = await db.query(queryString, values)
        return rows || null
    },

    async EliminarPrenda(id) {
        const queryString = `
            DELETE FROM prendas
            WHERE id = $1
            RETURNING id;
        `;

    // Ensure the ID is treated as a string or BigInt for Postgres
        const values = [id]; 

        const { rows, rowCount } = await db.query(queryString, values);

    // Using rowCount is actually safer for int8 deletes
        if (rowCount === 0) return null;

        return rows[0]; 
    }
}