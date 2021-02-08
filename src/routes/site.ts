import { Router } from "express";
import { createSite, deleteById, getAllSites } from "../controllers/site";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();

router.get('/', isLoggedIn, getAllSites);

router.delete('/:siteId', isAdmin, deleteById);

router.post('/', isAdmin, createSite);

export default router;