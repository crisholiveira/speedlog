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
    findByCod: async (req, res) => {
        let { id } = req.params;
        let produto = await Produto.findOne({
            where: {
                id: id
            }
        })
        return res.render('editarProdutos', { produto })
    },
    search: async (req, res) => {
        let { key } = req.query;
        let produtos = await Produto.findAll({
            where: {
                nome: {
                    [Op.like]: `%${key}%`
                }
            },
            order: [
                [`nome`, `ASC`]
            ]

        })
        return res.render('produtos', { produtos })
    }
}
module.exports = produtosController


