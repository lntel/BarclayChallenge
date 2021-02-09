import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts } from "../controllers/product";
import isAdmin from "../middleware/isAdmin";

const router = Router();

router.get('/', getAllProducts);

router.delete('/:productId', isAdmin, deleteProduct);

router.post('/', isAdmin, createProduct)

export default router;