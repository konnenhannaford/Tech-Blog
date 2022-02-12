const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedCommenting = require('./commenting');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n seeded \n");
  await seedUsers();
  console.log("\n seeded \n");
  await seedPosts();
  console.log("\n seeded \n");  
  await seedCommenting();
  console.log("\n seeded \n");  
  process.exit(0);
};

seedAll();