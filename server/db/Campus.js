const Sequelize = require('sequelize');
const db = require('./database.js');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.TEXT
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/piccies/defaultCampusImg.svg'
    },
    
});

module.exports = Campus;