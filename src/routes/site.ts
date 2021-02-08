import { Router } from "express";
import isAdmin from "../middleware/isAdmin";

const router = Router();

router.post('/', isAdmin)

export default router;