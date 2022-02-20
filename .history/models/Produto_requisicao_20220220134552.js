const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Produto_requisicao = sequelize.define('produto_requisicao',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        requisicoes_id: {
            type: DataType.INTERGER
            //colocar referencia da chave estrangeira aqui
        },
        produtos_id:{
            type: DataType.INTERGER,
            //colocar aqui referencia da chave estrangeira
        tableName: 'produto_requisicao'
        }
    })

    return Produto_requisicao;
};