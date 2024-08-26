const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware para manejar CORS y JSON
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',       // Cambia si es necesario
  user: 'admin', // Usuario de MySQL
  password: 'tfgencuestas', // Contraseña de MySQL
  database: 'tfg-app-encuestas'  // Nombre de la base de datos
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener todas las encuestas
app.get('/api/encuestas', (req, res) => {
  const sql = 'SELECT * FROM encuestas';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Ruta para crear una nueva encuesta
app.post('/api/encuestas', (req, res) => {
  const nuevaEncuesta = req.body;
  const sql = 'INSERT INTO encuestas SET ?';
  db.query(sql, nuevaEncuesta, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...nuevaEncuesta });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
