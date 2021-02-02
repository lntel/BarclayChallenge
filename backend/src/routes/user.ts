import { Router } from "express";
import { createUser } from "../controllers/user";

const router = Router();

// Create a new user
router.post('/', createUser);

// Login to a user account
router.post('/login', )

export default router;