import { Router } from "express";
const router = Router();
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/logout", logout);
export default router;
