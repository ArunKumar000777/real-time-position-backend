const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Real-Time Tracking Server is running");
});

module.exports = router;
