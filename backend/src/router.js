const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");
const antutuControllers = require("./controllers/antutuControllers");
const configControllers = require("./controllers/configControllers");
const etatControllers = require("./controllers/etatControllers");
const localisationControllers = require("./controllers/localisationControllers");
const ponderationControllers = require("./controllers/ponderationControllers");
const ramControllers = require("./controllers/ramControllers");
const stockageControllers = require("./controllers/stockageControllers");
const categoryControllers = require("./controllers/categoryControllers");

// routes //
router.get("/phones", phoneControllers.browse);
router.post("/phones", phoneControllers.add);

router.get("/phones/:id", phoneControllers.read);

router.get("/antutu", antutuControllers.browse);

router.get("/config", configControllers.browse);

router.get("/etat", etatControllers.browse);

router.get("/localisation", localisationControllers.browse);

router.get("/ponderation", ponderationControllers.browse);

router.get("/ram", ramControllers.browse);

router.get("/stockage", stockageControllers.browse);

router.get("/categories", categoryControllers.browse);

// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.put("/phones/:id", phoneControllers.edit);
router.put("/phonesmodi/:id", phoneControllers.modifyphone);

module.exports = router;
