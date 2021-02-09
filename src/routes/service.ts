import { Router } from "express";
import { createService, deleteService, getAllServices } from "../controllers/service";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();

router.get('/', getAllServices)

router.post('/', isAdmin, createService)

router.delete('/:serviceId', isAdmin, deleteService)

export default router;