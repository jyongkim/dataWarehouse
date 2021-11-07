const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id_user: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        email: {
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
            foreignKey: "id_region"

        });
    };
    return Region;
}
