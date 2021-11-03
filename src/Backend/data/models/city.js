const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias= "City";
    let cols={
        id_city: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        city:{
            allowNull: false,
            type: dataTypes.STRING,
        },
        id_country:{
            allowNull: false,
            type: dataTypes.INTEGER,
        },
};
let config={
    tableName:"cities",
    timestamps: false,
};
const City = sequelize.define(alias,cols,config);
City.associate = (models)=> {
    //relacion
    City.belongsTo (models.Region, {
        as: 'country',  
        foreignKey: 'id_country' 
    })
    }
return City;
}