const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Movimentacao = sequelize.define('movimentacao_requisicao',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        movimentacao_id:{
            type: DataType.INTERGER
            //colocar aqui referencia da chave estrangeira
        },
        requisicao_id: {
            type: DataType.INTERGER,
            //colocar aqui referencia da chave estrangeira
        tableName: 'movimentacao_requisicao'
        }
    })

    return Movimentacao;
};