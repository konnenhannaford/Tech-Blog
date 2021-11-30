// home page shows all posts
const router = require("express").Router();
const {Posts, Users } = require("../models");

// / routes

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
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

// router.get("/post/:id", async (req, res) => {
//   try {
//     const dbPostData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           include: [
//             {
//               model: Users,
//               attributes: ["Username", "id"],
//             },
//           ],
//         },
//         {
//           model: Users,
//           attributes: ["Username", "id"],
//         },
//       ],
//     });
//     const post = dbPostData.get({ plain: true });
//     res.render("single-post", {
//       ...post,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
