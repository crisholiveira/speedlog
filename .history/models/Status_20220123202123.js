const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define({
        id_status:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_status: DataType.STRING
        )
}
/*NÃO TERMINEI*/