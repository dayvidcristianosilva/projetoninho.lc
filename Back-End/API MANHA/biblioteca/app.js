const express = require('express');
const app = express();
const port = 4000;

// Livros
app.get('/livros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/listLivros.html');
});

app.get('/addlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/livros.html');
});

app.get('/editlivros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros/editLivro.html');
});

// Categorias
app.get('/categorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/listCategorias.html');
});

app.get('/addcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/categorias.html');
});

app.get('/editcategorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias/editCategoria.html');
});


//Pedidos
app.get('/pedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/listPedidos.html');
});

app.get('/addPedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/pedidos.html');
});

app.get('/editpedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos/editPedidos.html');
});


// Usuarios
app.get('/usuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/listUsuarios.html');
});

app.get('/addUsuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/usuarios.html');
});

app.get('/editUsuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios/editUsuarios.html');
});

// Index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
