const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("POSTS route"));

module.exports = router;