const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentingRoutes = require("./commentingRoutes");

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use("/commenting", commentingRoutes);

module.exports = router;






