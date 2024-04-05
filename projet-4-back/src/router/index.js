const express = require("express")

const router = express.Router()

const annonceRoutes = require("./annonceRouter")

router.use("/annonce", annonceRoutes)

module.exports = router;