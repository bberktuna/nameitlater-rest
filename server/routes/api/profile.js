const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("PRIFLE route"));

module.exports = router;
