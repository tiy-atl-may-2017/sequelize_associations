'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define('Comments', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});

  Comments.associate = function(models) {
    Comments.belongsTo(models.Posts, {as: 'post', foreignKey: 'postId'});
  }
  return Comments;
};
