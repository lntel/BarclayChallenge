import { Response, Request } from "express";
import { getRepository } from "typeorm";
import Service from "../entity/service";

export const createService = async (req: Request, res: Response) => {

    const {
        name,
        cost
    } = req.body;

    try {

        const serviceRepo = getRepository(Service);

        const serv = new Service();

        serv.name = name;
        serv.cost = parseFloat(cost);

        const result = await serviceRepo.save(serv);

        res.send({
            message: 'Service successfully created',
            service: result
        });

    } catch (error) {
        console.error(error);
    }

}

export const getAllServices = async (req: Request, res: Response) => {

    try {
        
        const serviceRepo = getRepository(Service);

        const result = await serviceRepo.find();

        res.send(result);

    } catch (error) {
        console.error(error)
    }

}

export const deleteService = async (req: Request, res: Response) => {

    const {
        serviceId
    } = req.params;

    try {
        
        const serviceRepo = getRepository(Service);

        const result = await serviceRepo.findOne(serviceId);

        if(!result) {
            return res.status(404).send({
                message: `Service ${serviceId} was not found`
            });
        }

        await serviceRepo.remove(result);

        res.send({
            message: `Service ${serviceId} was deleted`
        });

    } catch (error) {
        console.error(error)
    }

}