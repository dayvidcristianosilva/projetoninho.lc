const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const Produto = require('./database/produto')

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o Banco de Dados");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//EJS como view engine
app.set('view engine', 'ejs');

//definindo a pasta de arquivos estaticos
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/produto", (req, res) => {
    res.render("produto");
});

app.post("/salvarProduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    });
});

app.listen(8080, () => {
    console.log("app rodando");
});