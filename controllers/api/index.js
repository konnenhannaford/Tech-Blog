const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postsRoutes = require('./postRoutes');
const commentingRoutes = require("./commentingRoutes");

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use("/commenting", commentingRoutes);

module.exports = router;

