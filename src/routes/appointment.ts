import { Router } from "express";
import { createAppointment } from "../controllers/appointment";
import isLoggedIn from "../middleware/isLoggedIn";

const router = Router();


router.post('/', isLoggedIn, createAppointment);


export default router;