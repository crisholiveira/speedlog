const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Requisicao = sequelize.define('Requisicao',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        qtd_solicitada: DataType.INTERGER,
        qtd_liberada: DataType.INTERGER,
        observacao: DataType.STRING,
        status_requisicao_id: {
            type: DataType.INTERGER
            //colocar aqui referencia da chave estrangeira
        },
        usuarios_id: {
            type: DataType.INTERGER,
            //colocar aqui referencia da chave estrangeira
        tableName: 'requisicoes'
        }
    })

    return Requisicao;
};