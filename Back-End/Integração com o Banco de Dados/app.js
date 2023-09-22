const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'dayvidcristiano'
});

connection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao MyDQL: ' + err.message);
    } else {
        console.log('Conectado ao MySQL');
    }
});

let books = [
    { id: 1, title: 'Livro 1' },
    { id: 2, title: 'Livro 2' },
    { id: 3, title: 'Livro 3' }
];

app.get('/api/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao buscar registros:' + err.message);
            res.status(500).json({ error: 'Erro ao buscar resgistros' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/books', (req, res) => {
    res.json(books);
})

app.post('/post-example', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta' + port)
});