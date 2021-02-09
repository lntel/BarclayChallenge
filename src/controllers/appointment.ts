import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Appointment } from "../entity/appointment";
import { User } from "../entity/user";

export const createAppointment = async (req: Request, res: Response) => {

    const {
        date,
        time
    } = req.body;

    console.log(req.body)

    try {

        const user = await User.exists('id', req.params.id);

        if(!user) return;

        const appRepo = getRepository(Appointment);

        const appo = new Appointment();

        appo.user = user;
        appo.date = date;
        appo.time = time;

        const result = await appRepo.save(appo);

        res.send({
            message: 'Appointment created',
            appointment: result
        });

    } catch (error) {
        console.error(error);
    }

}