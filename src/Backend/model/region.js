const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Data_Warehouse', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const { DataTypes } = require('sequelize')
const Region = sequelize.define('Region', {
    // Model attributes are defined here
    id_region: {
        type: DataTypes.INT,
        allowNull: false
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    // Other model options go here
});