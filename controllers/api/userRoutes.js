const router = require('express').Router();
const { User } = require('../../models');

  router.get("/uid", async (req, res) => {
    const uid = req.session.uid;
    try {
      res.status(200).json(uid);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  
  router.get("/", async (req, res) => {
    try {
      res.render("login");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  
  router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login router
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect details' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect details' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
res.status(200).render("homepage", { loggedIn: req.session.loggedIn });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout router
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }

});

module.exports = router;











