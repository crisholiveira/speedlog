module.exports = (sequelize, DataType) => {
    const Requisicao = sequelize.define('Requisicao',{
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qtd_solicitada: DataType.INTEGER,
        qtd_liberada: DataType.INTEGER,
        observacao: DataType.STRING,
        usuarios_id: { type: DataType.INTEGER } //se refere a chave estrangeira
           
    },{
        tableName: 'requisicoes'
    });

    Requisicao.associate = (models) => {
        Requisicao.belongsToMany(models.Movimentacao,{through: models.Movimentacao_requisicao})
    }

    return Requisicao;
}

//não terminei
