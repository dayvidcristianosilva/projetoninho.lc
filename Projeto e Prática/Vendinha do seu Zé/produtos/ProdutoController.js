const express = require('express');
const router = express.Router();
const Produto = require('./Produto');

router.get("/produtos", (req, res) => {
    Produto.findAll({ raw: true }).then(produtos => {
        res.render('produtos/index', {
            produtos: produtos
        })
    });
});

router.get("/produto/novo", (req, res) => {
    res.render("produtos/novo")
})


router.post("/salvarProduto", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    });
});

router.get("/produtos/", (req, res) => {
    Produto.findAll().then(produtos => {
        console.log(produtos);
    });
    res.render('index')
});

router.post("/produto/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Produto.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/produtos")
            })
        }

    }
});

router.get("/produto/edit/:id", (req, res) => {
    var id = req.params.id;
    Produto.findByPk(id).then(produto => {
        res.render("produto/edit", {
            produto: produto
        })
    })
})

router.post("/produto/atualizar", (req, res) => {
    var id = req.body.id;
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Produto.update(
        {
            titulo: titulo,
            descricao: descricao
        }, {
        where: {
            id: id
        }
    }
    )
})

module.exports = router;