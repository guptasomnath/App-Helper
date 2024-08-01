import { Router } from "express";
import { loginWithGoogle, verifyLogin } from "../controller/auth.controller";
import { loginRateLimit } from "../middleware/rateLimit";

const authRouter = Router();

authRouter.get("/google", loginRateLimit, loginWithGoogle)
authRouter.get("/google/callback", loginRateLimit, verifyLogin)

export default authRouter;