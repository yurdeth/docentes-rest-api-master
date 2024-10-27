// Importar postgresql
import Pool from 'pg-pool';
import dotenv from "dotenv";

dotenv.config();

// Configuración de la conexión a la base de datos. Leer desde archivo ../.env
const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASSWORD),
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

db.on('error', (err) => {
  console.error("Error inesperado en la base de datos", err);
});

db.connect()
    .then(() => console.log("Conexión a la base de datos exitosa"))
    .catch(err => console.error("Error al conectarse a la base de datos", err));

export default db;
