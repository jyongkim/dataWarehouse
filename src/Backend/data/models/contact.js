const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "Contact";
    let cols = {
        id_region: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        region: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "contacts",
        timestamps: false,
    };
    const Region = sequelize.define(alias, cols, config);

    return Region;
}