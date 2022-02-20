const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Prduto = sequelize.define('Produto',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: DataType.INTERGER,
        nome: DataType.STRING,
        tableName: 'Produto'
    })

    return Produto;
};