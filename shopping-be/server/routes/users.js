import express from "express";
import userController from "./../controllers/users.controller";
import auth from "./../middleware/auth";
const router = express.Router();

router.route("/save").post(userController.save);
router.route("/login").post(userController.login);
router.post("/logout", auth, userController.logout);
router.get("/me", auth, async (req, res) => {
  res.send(req.user);
});

export default router;
