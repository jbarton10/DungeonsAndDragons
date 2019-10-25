const router = require("express").Router();
const roomController = require("../../controller/roomController");

router
  .route("/")
  .get(roomController.findAll)
  .post(roomController.create);

router
  .route("/:id")
  .get(roomController.findById)
  .put(roomController.update)
  .delete(roomController.delete);

module.exports = router;
