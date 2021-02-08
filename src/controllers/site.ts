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

        const result = await siteRepo.find({
            relations: ['hairdressers']
        });

        res.send(result);
    }
    catch(err){
        console.error(err);
    }

}

export const deleteById = async (req: Request, res: Response) => {

    const { siteId } = req.params;

    try {
        
        const siteRepo = getRepository(Site);

        const exists = await siteRepo.findOne(siteId);

        if(!exists) {
            return res.status(404).send({
                message: `Site ${siteId} does not exist`
            });
        }

        await siteRepo.remove(exists);

        res.send({
            message: `Site ${siteId} deleted`
        });
        

    } catch (error) {
        console.error(error);
    }

}

export const update = async (req: Request, res: Response) => {

    try {
        


    } catch (error) {
        console.error(error);
    }

}