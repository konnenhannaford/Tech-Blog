const router = require('express').Router();

const userRoutes = require('./commentingRoutes');
const projectRoutes = require('./postRoutes');
const commentingRoutes = require("./commenting-routes");

router.use('/users', userRoutes);
router.use('/posts', projectRoutes);
router.use("/commenting", commentingRoutes);

module.exports = router;

