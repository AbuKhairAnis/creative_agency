const router = require("express").Router();
const {
  signupPostController,
  loginPostController,
} = require("../controller/authController");

router.post("/signup", signupPostController);
router.post("/login", loginPostController);

module.exports = router;
