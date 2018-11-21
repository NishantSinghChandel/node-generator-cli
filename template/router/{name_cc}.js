/* Summary: This file contains the routes for {{name_cc}} */

const router = require("express").Router();
const controller{{name_pc}} = require("../controllers/{{name_cc}}");

//.................................CRUD routes....................

// Create {{name_cc}}
router.post("/", controller{{name_pc}}.requestCreate{{name_pc}});

// Get {{name_cc}} List
router.get("/", controller{{name_pc}}.requestGet{{name_pc}}List);

// Get one post by id
router.get("/:id", controller{{name_pc}}.requestGet{{name_pc}}ById);

// Update {{name_cc}} by id
router.put("/:id", controller{{name_pc}}.requestUpdate{{name_pc}}ById);

// Delete {{name_cc}} by id
router.delete(
  "/:id",
  controller{{name_pc}}.requestDelete{{name_pc}}ById
);

module.exports = router;
