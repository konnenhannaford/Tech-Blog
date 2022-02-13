
const router = require("express").Router();
const {Posts, Users, Commenting } = require("../models");
const withAuth = require("../utils/auth");

// / routes

router.get("/", async (req, res) => {
  try {
    const posting = await Post.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    const posts = posting.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});


module.exports = router;
