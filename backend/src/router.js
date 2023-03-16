const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");
const antutuControllers = require("./controllers/antutuControllers");

// routes //
router.get("/phones", phoneControllers.browse);
router.post("/phones", phoneControllers.add);

router.get("/antutu", antutuControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
