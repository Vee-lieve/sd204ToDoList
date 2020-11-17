const express = require('express');
const router = express.Router();
const tasks = require("../controllers/toDosController");
// const {
//     getToDos,
//     addToDo,
//     getToDosById,
//     updateToDos,
//     deleteToDos,
// } = require("../controllers/toDosController");


router.get("/", tasks.getToDos);
router.get("/:id", tasks.getToDosById);
router.post("/add", tasks.addToDo);
router.get("/update/:id", tasks.updateTodosForm),
router.post("/update", tasks.updateToDos);
router.post("/delete", tasks.deleteToDos);

module.exports = router;