const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurar conexão com o MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'dayvidcristiano'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ' + err.message);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Middleware para lidar com dados codificados no corpo da solicitação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});