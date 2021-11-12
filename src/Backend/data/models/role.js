const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "Role";
    let cols = {
        id_role: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        role: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "roles",
        timestamps: false,
    };
    const Role = sequelize.define(alias, cols, config);
    // Region.associate = function (models) {
    //     Region.hasMany(models.Country, {
    //         as: "countries",
    //         foreignKey: "id_region"

    //     });
    //  };
    return Role;
}
