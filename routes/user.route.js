"use strict";

const express = require("express");

// eslint-disable-next-line new-cap
const router = express.Router();
const dummy = {
    username: "test"
};

router.get("/", (req, res) => {
    res.json(dummy);
});

module.exports = router;
