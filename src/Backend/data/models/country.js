const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "Country";
    let cols = {
        id_country: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER,
        },
        country: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        id_region: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
    };
    let config = {
        tableName: "countries",
        timestamps: false,
    };
    const Country = sequelize.define(alias, cols, config);
    Country.associate = (models) => {
        //relacion
        Country.belongsTo(models.Region, {
            as: 'region',
            foreignKey: 'id_region'
        });
        Country.hasMany(models.City, {
            as: "cities",
            foreignKey: "id_country",
            onDelete: 'cascade'

        });
    }

    return Country;
}
