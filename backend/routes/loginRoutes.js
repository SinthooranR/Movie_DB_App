const express = require("express");
const loginControllers = require("../controllers/loginControllers");

const router = express.Router();

// routes middleware
router.post("/signup", loginControllers.signup);

router.post("/login", loginControllers.login);

module.exports = router;
