import { Router } from "express";
import { createSite, getAllSites } from "../controllers/site";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();

router.get('/', isLoggedIn, getAllSites);

router.post('/', isAdmin, createSite);

export default router;