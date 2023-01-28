const express = require("express");
const { register, activateAcount, login } = require("../controllers/user");

const router = express.Router();
router.post("/register", register);
router.post("/activate", activateAcount);
router.post("/login", login);
module.exports = router;
