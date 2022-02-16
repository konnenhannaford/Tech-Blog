const router = require('express').Router();

// router.use('/api', apiRoutes);



   
// const userRoutes = require("./user-routes");
// const commentRoutes = require("./comment-routes");

const apiRoutes = require("./api");
const home_Routes = require("./home_route.js");
const dash_Routes = require("./dash_route.js");

router.use("/api", apiRoutes);
router.use("/", home_Routes);
router.use("/dashboard", dash_Routes);
// router.use("/user", userRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;











