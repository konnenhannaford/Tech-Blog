const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);



   
const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

const apiRoutes = require("./api");
const home_Route = require("./home_route.js");
const dash_Route = require("./dashboard_route.js");

router.use("/", home_Route);
router.use("/dashboard", dash_Route);
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;