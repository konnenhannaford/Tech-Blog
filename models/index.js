const Users = require("./Users");
const Posts = require("./Posting");
const Commenting = require("./Commenting");

Users.hasMany(Posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Users.hasMany(Commenting, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: "user_id",
});

Posts.hasMany(Commenting, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Commenting.belongsTo(Users, {
  foreignKey: "user_id",
});
Commenting.belongsTo(Posts, {
  foreignKey: 'post_id'
});

module.exports = { Users, Posts, Commenting };