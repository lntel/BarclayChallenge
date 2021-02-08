import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Hairdresser } from "../entity/hairdresser";
import { Site } from "../entity/site";

export const getAllHairdressers = async (req: Request, res: Response) => {

    try {
        
        const hairRepo = getRepository(Hairdresser);

        const result = await hairRepo.find({
            relations: ['site'],
        });

        res.send(result);

    } catch (error) {
        console.error(error)
    }

}

export const createHairdresser = async (req: Request, res: Response) => {

    const {
        forename,
        surname,
        description,
        siteId
    } = req.body;

    try {

        const site = await Site.exists(siteId);

        if(!site) {
            return res.status(404).send({
                message: `Site ${siteId} does not exist`
            });
        }

        const hairRepo = getRepository(Hairdresser);

        const hairdresser = new Hairdresser();

        hairdresser.forename = forename;
        hairdresser.surname = surname;
        hairdresser.description = description;
        hairdresser.site = site;

        const result = await hairRepo.save(hairdresser);

        res.send({
            message: 'Hairdressed created',
            hairdresser: result
        });

    } catch (error) {
        console.error(error);
    }

}

export const deleteHairdresser = async (req: Request, res: Response) => {

    const { hairId } = req.params;

    try {

        const hairRepo = getRepository(Hairdresser);

        const hairdresser = await hairRepo.findOne(hairId);

        if(!hairdresser) {
            return res.status(404).send({
                message: `Hairdresser ${hairId} not found`
            });
        }

        await hairRepo.remove(hairdresser);

        res.send({
            message: `Hairdresser ${hairId} deleted`
        });

    } catch (error) {
        console.error(error);
    }

}

