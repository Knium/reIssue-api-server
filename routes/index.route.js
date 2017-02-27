"use strict";

const express = require("express");

// eslint-disable-next-line new-cap
const router = express.Router();
const userRouter = require("./user.route");

router.get("/", (req, res) => {
    res.json({ title: "Express" });
});
router.use("/user", userRouter);

module.exports = router;
