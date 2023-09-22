const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require(".database/database");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o Banco de Dados")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');

// EStou definindo a pasta 
app.use(express.static('public'));



app.get("/", (req, res) => {
    var nome = "Dayvid";
    var idade = 20;
    var produtos = [
        { nome: "Abacaxi", preco: 2.5 },
        { nome: "Futurinhos", preco: 2.7 }
    ];

    res.render("index", {
        nome: nome,
        idade: idade,
        produtos: produtos
    });
});

app.get("/produto", (req, res) => {
    res.render("produto")
})

app.post("/saveProduto", (req, res) => {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    res.send("Form recebido! " + "<br>" + "Produto: " + nome + " " + "<br>" + "Descrição: " + descricao);

})

app.get("/usuario", (req, res) => {
    res.send("Dayvid Cristiano")
});


// Localhost:8080
app.listen(8080, () => {
    console.log("App rodando")
});