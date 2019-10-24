var path = require("path");
const router = require("express").Router();
const playerRoutes = require("./player");
const roomRoutes = require("./room");

router.use("/players", playerRoutes);

router.use("/rooms", roomRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;
