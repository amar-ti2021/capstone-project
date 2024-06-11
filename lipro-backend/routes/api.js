import express from "express";
import AuthController from "../controllers/AuthController.js";
import TodoController from "../controllers/TodoController.js";

const router = express.Router();
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.post("/protected/check-auth", AuthController.checkLogin);

router.get("/protected/todo", TodoController.index);
router.get("/protected/todo/:id", TodoController.show);
router.put("/protected/todo/:id", TodoController.update);
router.delete("/protected/todo/:id", TodoController.destroy);
router.post("/protected/todo", TodoController.store);

router.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default router;
