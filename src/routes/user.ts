import { Router } from "express";
import { createUser, login, refreshToken } from "../controllers/user";
import { validate } from "../middleware/validate";
import { createUserValidator } from '../validators/user'

const router = Router();

// Create a new user
router.post('/', validate(createUserValidator), createUser);

// Login to a user account
router.post('/login', login);

// Refresh the access token
router.post('/token', refreshToken)

export default router;