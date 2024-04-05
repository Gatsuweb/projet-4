const express = require("express");

const router = express.Router();

const { getAll, getOne, add, deleteAnnonce, updateAnnonce} = require("../controller/annonceController");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", add);
router.delete("/:id", deleteAnnonce);
router.put("/:id", updateAnnonce);

module.exports = router;