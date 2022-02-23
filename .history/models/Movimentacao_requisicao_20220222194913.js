
module.exports = (sequelize, DataType) => {
    const Movimentacao_requisicao = sequelize.define('Movimentacao_requisicao',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movimentacao_id:{
            type: DataType.INTEGER
            
        },
        requisicao_id: {
            type: DataType.INTEGER,
        },
        },{
        tableName: 'movimentacao_requisicao'              
    
    })

    return Movimentacao_requisicao;
};