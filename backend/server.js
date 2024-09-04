const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Configura la conexión a MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'tfg-app-encuestas'
  //port: 3306,
  //debug: true
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la Base de DatosL:', err);
    return;
  }
  console.log('Conectado a la Base de Datos.');
});
//Registro de un usuario
app.post('/api/register', (req, res) => {
  const { nombre, apellido1, apellido2, correo, contrasena, genero } = req.body;

  const query = 'INSERT INTO usuarios (nombre, apellido1, apellido2, correo, contrasena, genero) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [nombre, apellido1, apellido2, correo, contrasena, genero], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error al registrar el usuario');
      return;
    }
    res.status(200).send('Usuario registrado exitosamente');
  });
});
// API para obtener datos de MySQL
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM yourtable', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving data from database.');
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
