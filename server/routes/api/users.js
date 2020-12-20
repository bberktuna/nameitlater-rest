const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("USERS route"));

module.exports = router;
