const { Produto, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const produtosController = {
    index: async (req, res) => {
        let { page = 1 } = req.query
        let { count: total, rows: produtos } = await Produto.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10

        })
        let totalPagina = Math.round(total / 10)
        return res.render('produtos', { produtos, totalPagina })

    },
    create: (req,res) => {

        return res.render('cadastroProduto')
    },
    store: async (req, res) => {
        const { codigo, nome } = req.body;
        const inclusao = await Produto.create({
            codigo,
            nome
        });
        console.log(inclusao)
        return res.redirect('/produtos')

    },
    edit: async (req, res) => {
        const {id} = req.params;
        const produto = await Produto.findByPk(id);
        return res.render('editarProdutos', {produto})

    },
    update: async (req, res) => {
        const {id} = req.params;
        const {codigo, nome } = req.body;
        const resultado = await Produto.update({
            codigo,
            nome
        },
        {
            where: {
                id
            }

        })
        console.log(resultado)
        return res.redirect('/produtos')

    },

    findByCod: async (req, res) => {
        let { id } = req.params;
        let produto = await Produto.findOne({
            where: {
                id: id
            }
        })
        return res.render('consultarProdutos', { produto })
    },
    search: async (req, res) => {
        let { page = 1 } = req.query
        let { key } = req.query;
        let { count: total, rows: produtos } = await Produto.findAndCountAll({
            where: {
                nome: { [Op.like]: `%${key}%`}},
            order: [[`nome`, `ASC`]],
            limit: 10,
            offset: (page - 1) * 10
        })       
        let totalPagina = Math.round(total / 10)
        return res.render('produtos', { produtos, totalPagina })       

    }
}
module.exports = produtosController


