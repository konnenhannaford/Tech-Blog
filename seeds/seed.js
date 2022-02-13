const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userSeed = require('./users.json');
const postSeed = require('./posts.json');
const commentSeed = require('./commenting.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postSeed) {
    await Post.create({
      ...post
    });
  }

  for (const comment of commentSeed){
    await Comment.create({
      ...comment
    });
  }

  process.exit(0);
  
};

seedDatabase();

