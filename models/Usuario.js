const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        sobrenome: DataType.STRING,
        setor: DataType.STRING,
        ativo: DataType.INTERGER,
        perfil: DataType.STRING,
        senha: DataType.STRING,
        tableName: 'usuarios'
    })

    return Usuario;
};