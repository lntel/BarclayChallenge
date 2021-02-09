import { Router } from "express";
import { getAllPayments, processPayment } from "../controllers/payment";
import isAdmin from "../middleware/isAdmin";
import isLoggedIn from "../middleware/isLoggedIn";


const router = Router();

router.get('/', isAdmin, getAllPayments);

router.post('/', isLoggedIn, processPayment);

export default router;