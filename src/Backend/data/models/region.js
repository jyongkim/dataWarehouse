const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "Region";
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
        tableName: "regions",
        timestamps: false,
    };
    const Region = sequelize.define(alias, cols, config);
    Region.associate = function (models) {
        Region.hasMany(models.Country, {
            as: "countries",
            foreignKey: "id_region",
            onDelete: 'cascade'

        });
    };
    return Region;
}
