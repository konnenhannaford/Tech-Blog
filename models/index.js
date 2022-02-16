const Users = require("./Users");
const Post = require("./Posting");
const Commenting = require("./Commenting");

Users.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Users.hasMany(Commenting, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Users, {
  foreignKey: "user_id",
});

Post.hasMany(Commenting, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Commenting.belongsTo(Users, {
  foreignKey: "user_id",
});
Commenting.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { Users, Post, Commenting };








