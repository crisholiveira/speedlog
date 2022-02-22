
module.exports = (sequelize, DataType) => {
    const Movimentacao = sequelize.define('movimentacao_requisicao',{
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

    return Movimentacao;
};