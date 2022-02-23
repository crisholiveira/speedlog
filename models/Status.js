module.exports = (sequelize, DataType) => {
    const Status = sequelize.define('status',{
        id_status:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
         tipo_status: DataType.STRING 
    })

    return Status;
};
        
    

//não terminei