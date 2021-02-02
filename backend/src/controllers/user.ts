import { Request, Response } from "express";
import { User } from "../entity/user";

import { hashSync } from 'bcrypt'
import config from "../config";
import { getRepository } from "typeorm";

export const createUser = async (req: Request, res: Response) => {

    const { emailAddress, password } = req.body;

    const emailExists = await User.exists(emailAddress);
    
    if(emailExists) {
        return res.status(409).send({
            message: 'This email address is already in use'
        });
    }

    try {
        const userRepo = getRepository(User);
    
        const user = new User();
    
        user.emailAddress = emailAddress.toLowerCase();
        user.password = hashSync(password, config.saltRounds);
    
        const result = await userRepo.save(user);

        res.send({
            message: 'Account successfully created',
            user: result
        });

    }
    catch(err) {
        console.error(err);
    }
}

export const login = (req: Request, res: Response) => {

    res.send('test')

}