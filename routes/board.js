const router = require("express").Router();
const controller = require("../controllers/boards");

// api's
router.post("/boards", controller.createBoard);
router.put("/boards/:id", controller.updateBoardById);

module.exports = router;
