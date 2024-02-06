const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS (ajusta según tus necesidades)
app.use(cors());

// Configuración de la conexión a la base de datos MySQL/MariaDB
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '', // Sin contraseña
  database: 'usuarios',
  port: 3306, // Puerto 3306 por defecto para MySQL/MariaDB
});
qs
// Conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Rutas para manipular datos
app.get('/api/items', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al realizar la consulta:', err.message);
      res.status(500).json({ error: 'Error al obtener datos' });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});