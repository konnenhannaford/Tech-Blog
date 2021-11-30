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