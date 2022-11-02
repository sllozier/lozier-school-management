const Sequelize = require('sequelize');
const db = require('./database.js');

const Student = db.define('student', {
    firstName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: true
       }
    },
    lastName: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: true
       }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
       validate: {
        notEmpty: true,
        isEmail: true
       }
    },
    gpa: {
        type: Sequelize.DECIMAL(2,1),
        validate: {
            max: 4.0,
            min: 0.0
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: '/piccies/defaultStudentImg.svg'
    },
    quote: {
        type: Sequelize.TEXT,
    }
});



module.exports = Student;