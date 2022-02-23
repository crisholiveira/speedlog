module.exports = (sequelize, DataType) => {
    const Produto_requisicao = sequelize.define('produto_requisicao',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        requisicoes_id: {
            type: DataType.INTEGER
            
        },
        produtos_id:{
            type: DataType.INTEGER,
            
        
        }},

        {tableName: 'produto_requisicao'}
    );

    return Produto_requisicao;
};

//não terminei