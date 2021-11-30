const { posts } = require('../models');

const postsdata = [
  {
    title: 'New Releases',
    content: 'Apple launches latest product',
    user_id: 1,
  },
  {
    title: 'Benefits of learning to code',
    content: 'Learning Code will become usefule in the future.',
    user_id: 2,
  },
  {
    title: 'The Growing Amount of Coding bootcamps',
    content: 'Have you ever wondered about coding and dont know where to start?',
    user_id: 3,
  },
  
];

const seedPosts = () => posts.bulkCreate(postsdata);

module.exports = seedPosts;