const express = require("express");
const router = express.Router();

const {createTodo, readTodo, deleteAll} = require('./../controllers/todoControllers');
// router.post("/createTodo", (req, res) => {
//   res.status(200).send({
//     data: "muhammad fayyaz ansari",
//   });
// });
router.post("/createTodo", createTodo);
router.get("/readTodo", readTodo);
router.delete("/deleteAll", deleteAll)
module.exports = router;


