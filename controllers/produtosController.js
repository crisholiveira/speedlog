const { Produto } = require ('../models')


const produtosController = {
    index: async (req, res) => {
        let produtos = await Produto.findAll()
        
            return res.render('produtos', {produtos})            
        
    }
}
module.exports = produtosController

//Aqui a ideia é enviar uma lista de todos os produtos

//Também preciso fazer uma verificação usando then().catch()
