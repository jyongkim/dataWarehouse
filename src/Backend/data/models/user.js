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
        },
        id_role: {
            allowNull: false,
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: 'role',
            foreignKey: 'id_role'
        });
    };
    return User;
}
