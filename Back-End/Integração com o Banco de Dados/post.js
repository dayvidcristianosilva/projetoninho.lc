const express = require('express');
const app = express();
const port = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let books = [
    { id: 1, title: 'Livro 1' },
    { id: 2, title: 'Livro 2' },
    { id: 3, title: 'Livro 3' }
];

app.get('/books', (req, res) => {
    res.json(books);
})

app.post('/post-example', (req, res) =>{
    const newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});

app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port);
});