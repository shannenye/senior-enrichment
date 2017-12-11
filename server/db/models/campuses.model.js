const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.ytimg.com/vi/jfZVKBs45-U/maxresdefault.jpg',
        validate: {
            isUrl: true
        }
    },
    description: Sequelize.TEXT
})

Campus.beforeValidate((campusInstance, optionsObj) => {
    if (!campusInstance.imageUrl) campusInstance.imageUrl = 'https://i.ytimg.com/vi/jfZVKBs45-U/maxresdefault.jpg'
})


module.exports = Campus