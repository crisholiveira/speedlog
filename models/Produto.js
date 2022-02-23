module.exports = (sequelize, DataType) => {
    const Prduto = sequelize.define('Produto',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: DataType.INTEGER,
        nome: DataType.STRING,
        tableName: 'produto'
    })

    return Produto;
};

//não terminei