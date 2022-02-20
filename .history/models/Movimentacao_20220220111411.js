const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Movimentacao = sequelize.define('Movimentacao',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
    })

    return Movimentacao;
};