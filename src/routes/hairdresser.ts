import { Router } from "express";
import { createHairdresser, getAllHairdressers } from "../controllers/hairdresser";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();


router.delete('/:hairId', isAdmin, )

router.get('/', isLoggedIn, getAllHairdressers);

router.post('/', isAdmin, createHairdresser);


export default router;