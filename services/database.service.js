import 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;

export class DatabaseService {
    constructor(connectionString = process.env.DB_URL) {
        this.pool = new Pool({
            connectionString: connectionString,
        });
    }

    // Método para verificar la conexión
    async isConnected() {
        try {
            // Intentamos obtener la hora actual de la base de datos
            const res = await this.pool.query('SELECT NOW()');
            console.log('✅ Conexión exitosa a PostgreSQL:', res.rows[0].now);
            return true;
        } catch (error) {
            console.error('❌ Error de conexión a la DB:', error.message);
            return false;
        }
    }

    // Método genérico para ejecutar consultas (ej: guardar una prenda)
    async query(text, params) {
        return await this.pool.query(text, params);
    }
}