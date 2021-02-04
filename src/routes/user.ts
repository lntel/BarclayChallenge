import { Router } from "express";
import { createUser, login } from "../controllers/user";
import { validate } from "../middleware/validate";
import { createUserValidator } from '../validators/user'

const router = Router();

// Create a new user
router.post('/', validate(createUserValidator), createUser);

// Login to a user account
router.post('/login', login);

export default router;