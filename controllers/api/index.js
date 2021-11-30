const router = require('express').Router();

const usersRoutes = require('./commentingRoutes');
const postsRoutes = require('./postRoutes');
const commentingRoutes = require("./commenting-routes");

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);
router.use("/commenting", commentingRoutes);

module.exports = router;

