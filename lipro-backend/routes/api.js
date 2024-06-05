import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.post("/protected/check-auth", AuthController.checkLogin);
router.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default router;
