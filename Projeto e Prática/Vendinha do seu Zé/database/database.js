const Sequelize = require("sequelize");

const connection = new Sequelize('dayvidcristiano',
'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;