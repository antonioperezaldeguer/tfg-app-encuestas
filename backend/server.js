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
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
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
