DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;

-- users

-- posts

-- commenting

const { Post } = require('../models');

const postdata = [
  {
    title: 'New Releases',
    content: 'Apple launches latest product',
    author_id: 1,
  },
  {
    title: 'Benefits of learning to code',
    content: 'Learning Code will become usefule in the future.',
    author_id: 2,
  },
  {
    title: 'The Growing Amount of Coding bootcamps',
    content: 'Have you ever wondered about coding and dont know where to start?',
    author_id: 3,
  },
  
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;



const { User } = require('../models');

const userdata = [
  {
    user_name: 'konnen23',
    password: 'password1',
    
  },
  {
    user_name: 'james23',
    password: 'password2',
    
  },
  {
    user_name: 'endalkachew23',
    password: 'password3',
    
  },
  
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

const { Commenting } = require('../models');

const commentingdata = [
  {
    comment: 'Comment test 1',
    commenter_id: 1,
    post_id: 3,
  },
  {
    comment: 'Comment test 2',
    commenter_id: 2,
    post_id: 1,
  },
  {
    comment: 'Comment test 3',
    commenter_id: 3,
    post_id: 2,
  },
  
  
];

const seedCommenting = () => Commenting.bulkCreate(commentingdata);

module.exports = seedCommenting;