const express = require("express");
const router = express.Router();
const authcontrollers= require("../controllers/auth-controller")
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authmiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authmiddleware, authcontrollers.register);
router.route("/login").post(validate(loginSchema), authmiddleware, authcontrollers.login);

router.route("/user").get(authmiddleware, authcontrollers.user);

module.exports = router;




















// router.get('/', (req, res) => {
//     res.status(200).send('message is send successfully');
// });
// router.route("/").get((req, res) => {
//     res.status(200).send('message is send successfully home');
// })
// router.route("/").get(home);
 
// router.route("/register").get((req, res) => {
//     res.status(200).send("message is send getester");
// })

// module.exports = router;