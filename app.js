const express = require("express");
const app = express();
const sequelize = require("sequelize");
const models = require("./models");

const post = models.Posts.create({
  title: "test",
  body: "hello body post 3"
}).catch(sequelize.ValidationError, function(err) {
  console.log("Not Valid! ", err);
}).catch(sequelize.UniqueConstraintError, function(err) {
  console.log("Not Unique! ", err);
}).then(function(newPost) {
  console.log(newPost);
});

// const comment = models.Comments.build({
//    title: "Comment3",
//    body: "Body3",
//    postId : 1
// })
// comment.save().then(function(newComment){
//   console.log(newComment)
// })

// models.Comments.bulkCreate([
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   },
//   {
//     title: "Hello",
//     body: "body",
//     postId: 2
//   }
// ]).then(function() {
//   return models.Comments.findAll();
// }).then(function(comments) {
//   console.log(comments);
// });

// models.Comments.findOne({
//   include: [
//     {
//        model: models.Posts,
//        as : 'post'
//     }
//   ]
// }).then(function(comment){
//    console.log(comment)
// })

// const post = models.Posts.findOne({
//   include: [
//     {
//       model: models.Comments,
//       as : 'comments'
//     }
//   ]
// }).then(function(post){
//      console.log(post.comments);
//      console.log(post.comments.length)
// })

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

app.listen(3000, function() {
  console.log("App running on localhost:3000");
});
