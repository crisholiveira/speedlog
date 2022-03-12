const { Produto, sequelize } = require ('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const produtosController = {
    index: async (req, res) => {
        let produtos = await Produto.findAll()
        
            return res.render('produtos', {produtos})            
        
    },
    findByCod: async (req, res) => {
        let {id} = req.params;
        let produto = await Produto.findOne({
            where: {
                id: id
            }
        })
        return res.render('editarProdutos', {produto})
    },
    search: async (req, res) => {
        let {key} = req.query;
        let produtos = await Produto.findAll({
            where: {
                nome:{
                    [Op.like]:`%${key}%`   
                           }
            }
            
        })
        return res.render('produtos', {produtos})     
    }
}
module.exports = produtosController


