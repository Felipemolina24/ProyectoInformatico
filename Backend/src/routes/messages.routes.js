import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { sendMessage } from "../controllers/messages.controllers.js";

const router = Router();

router.post('/messages', authRequired, sendMessage);
