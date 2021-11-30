const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  editTask,
} = require("../controllers/tasks");

//router.route("/").get((req, res)... === router.get("/",(req, res)...

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
