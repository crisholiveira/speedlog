const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Movimentacao = sequelize.define('Movimentacao',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        data_entrada: DataType.DATE, //nao tenho certeza se isso esta certo
        data_saida: DataType.INTERGER,
        qtd_entrada: DataType.INTERGER,
        qtd_saida: DataType.INTERGER,
        qtd_ajuste: DataType.INTERGER,
        tableName: 'movimentacao'

    })

    return Movimentacao;
};