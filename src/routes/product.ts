import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/product";
import isAdmin from "../middleware/isAdmin";

const router = Router();

router.get('/', getAllProducts);

router.post('/', isAdmin, createProduct)

export default router;