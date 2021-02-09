import { Router } from "express";
import { createService, getAllServices } from "../controllers/service";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();

router.get('/', isLoggedIn, getAllServices)

router.post('/', isAdmin, createService)

export default router;