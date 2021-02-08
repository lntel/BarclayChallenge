import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Site } from "../entity/site";

export const createSite = async (req: Request, res: Response) => {

    const {
        address,
        postcode,
        landline
    } = req.body;

    const id = req.params.id;

    try {

        const siteRepo = getRepository(Site);

        const site = new Site();

        site.address = address;
        site.postcode = postcode;
        site.landline = landline;

        const result = await siteRepo.save(site);

        res.send({
            message: 'Site created',
            site: result
        });

    }
    catch(err){
        console.error(err);
    }

}

export const getAllSites = async (req: Request, res: Response) => {

    try {
        const siteRepo = getRepository(Site);

        const result = await siteRepo.find();

        res.send(result);
    }
    catch(err){
        console.error(err);
    }

}

export const deleteById = (req: Request, res: Response) => {

    const { id } = req.params;

    console.log(id)

}