const sequelize = require('../config/connection');
const seedPostData = require('./blogPostData');
const seedUserData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedPostData();

    await seedUserData();

    process.exit(0);
};

seedAll();
