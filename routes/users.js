"use strict";

const express = require("express");

// eslint-disable-next-line new-cap
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
    res.send("respond with a resource");
});

module.exports = router;