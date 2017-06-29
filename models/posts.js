'use strict';
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        notContains: 'hi'
      }
    },
    body: {
      type: DataTypes.TEXT
    }
  }, {});

  Posts.associate = function(models) {
    Posts.hasMany(models.Comments, {as: 'comments', foreignKey: 'postId'})
  }
  return Posts;
};
