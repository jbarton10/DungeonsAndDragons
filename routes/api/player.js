const router = require("express").Router();
const playerController = require("../../controller/playerController");

router
  .route("/")
  .get(playerController.findAll)
  .post(playerController.create);

router
  .route("/:id")
  .get(playerController.findById)
  .put(playerController.update)
  .delete(playerController.delete);

module.exports = router;
