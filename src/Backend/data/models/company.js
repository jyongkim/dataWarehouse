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
        },
        id_user: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        id_city: {
            allowNull: false,
            type: dataTypes.INTEGER,
        },
        address: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        phone: {
            allowNull: false,
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "companies",
        timestamps: false,
    };
    const Company = sequelize.define(alias, cols, config);
    Company.associate = (models) => {
        //relacion
        Company.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'id_user'
        });
        Company.belongsTo(models.City, {
            as: 'city',
            foreignKey: 'id_city'
        });

    }

    return Company;
}
