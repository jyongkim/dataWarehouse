const db = require('./index')
module.exports = (sequelize, dataTypes) => {
    let alias = "Company";
    let cols = {
        id_company: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        company: {
            allowNull: false,
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "companies",
        timestamps: false,
    };
    const Company = sequelize.define(alias, cols, config);
    // Region.associate = function (models) {
    //     Region.hasMany(models.Country, {
    //         as: "countries",
    //         foreignKey: "id_region"

    //     });
};
return Company;
}
