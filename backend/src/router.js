const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");

// routes //
router.get("/phones", phoneControllers.browse);

// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
