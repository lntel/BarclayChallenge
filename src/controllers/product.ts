import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../entity/product";

export const getAllProducts = async (req: Request, res: Response) => {

    try {
        
        const productRepo = getRepository(Product);

        const result = await productRepo.find();

        res.send(result);

    } catch (error) {
        console.error(error);
    }

}

export const createProduct = async (req: Request, res: Response) => {

    const {
        name,
        description,
        imageUrl,
        price
    } = req.body;

    try {
        
        const productRepo = getRepository(Product);

        const product = new Product();

        product.name = name;
        product.description = description;
        product.imageUrl = imageUrl;
        product.price = price;

        const result = await productRepo.save(product);

        res.send({
            message: 'Product created',
            product: product
        });

    } catch (error) {
        console.error(error);
    }

}
export const deleteProduct = async (req: Request, res: Response) => {

    const {
        productId
    } = req.params;

    try {
        
        const productRepo = getRepository(Product);

        const result = await productRepo.findOne(productId);

        if(!result) {
            return res.status(404).send({
                message: `Product ${productId} was not found`
            });
        }

        productRepo.remove(result)

        res.send({
            message: `Product ${productId} has been deleted`
        });

    } catch (error) {
        console.error(error);
    }

}