const { DataType } = require("sequelize/types");

module.exports = (sequelize, DataType) => {
    const Status = sequelize.define('status',{
        id_status:{
            type:DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
         tipo_status: DataType.STRING 
    })

    return Status;
};
        
    

