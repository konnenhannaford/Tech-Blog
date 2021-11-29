const router = require('express').Router();

router.use('/api', apiRoutes);



   
// const userRoutes = require("./user-routes");
// const commentRoutes = require("./comment-routes");

const apiRoutes = require("./api");
const home_Route = require("./home_route.js");
const dash_Route = require("./dashboard_route.js");

router.use("/api", apiRoutes);
router.use("/", home_Route);
router.use("/dashboard", dash_Route);
// router.use("/user", userRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;