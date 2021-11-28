const router = require("express").Router();
const { Commenting } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const dbCommentingData = await Commenting.create({
      post_id: req.body.post_id,
      user_id: req.body.user_id,
      body: req.body.body,
    });
    res.status(200).json(dbCommentingData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;