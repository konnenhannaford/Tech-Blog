const router = require("express").Router();
const { Comment, Post } = require("../models");
const withAuth = require("../utils/auth");

// /dashboard routes
router.get("/", async (req, res) => {
  try {
   
    const uid = req.session.uid;
   
    const dbPostData = await Post.findAll({ where: { user_id: uid } });
   
    const post = dbPostData.map((post) => post.get({ plain: true }));
    // TODO call helper to pull user info and display it on page
    res.render("all-post-admin", {
      post,
      loggedIn: req.session.loggedIn,
      layout: "dashboard.handlebars",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/edit-post/:id", async (req, res) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id);
//     const postInfo = dbPostData.dataValues;
//     res.render("edit-post", {
//       postInfo,
//       layout: "dashboard.handlebars",
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get("/newPost", async (req, res) => {
  try {
    // TODO call helper to pull user info and display it on page
    res.render("newPost", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;