import { Request, Response } from "express";
import { User } from "../entity/user";

import { compareSync, hashSync } from 'bcrypt'
import config from "../config";
import { getRepository } from "typeorm";
import { signToken } from "../helpers/token";
import { verify } from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {

    const { emailAddress, password, mobileNumber, forename, surname } = req.body;

    const emailExists = await User.exists('emailAddress', emailAddress);
    
    if(emailExists) {
        return res.status(409).send({
            message: 'This email address is already in use'
        });
    }
    
    const mobileExists = await User.exists('mobileNumber', mobileNumber);
    
    if(mobileExists) {
        return res.status(409).send({
            message: 'This mobile number is already in use'
        });
    }

    try {
        const userRepo = getRepository(User);
    
        const user = new User();
    
        user.emailAddress = emailAddress.toLowerCase();
        user.password = hashSync(password, config.saltRounds);
        user.mobileNumber = mobileNumber;
        user.forename = forename;
        user.surname = surname;
    
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

export const login = async (req: Request, res: Response) => {

    const { emailAddress, password } = req.body;

    try {

        const userRepo = getRepository(User);

        const result = await userRepo.findOne({
            where: {
                emailAddress: emailAddress.toLowerCase()
            }
        });

        if(!result) {
            return res.status(404).send({
                message: 'This email address does not exist'
            });
        }

        if(!compareSync(password, result.password)) {
            return res.status(401).send({
                message: 'You have entered an invalid password, please try again'
            });
        }

        const tokenObject =  {
            emailAddress: result.emailAddress,
            id: result.id,
            forename: result.forename,
            surname: result.surname,
            admin: result.admin,
            mobile: result.mobileNumber
        };

        const accessToken = signToken('access', tokenObject);
        const refreshToken = signToken('refresh', tokenObject);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 15
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7
        });

        res.send({
            message: 'Successfully signed in, please wait',
            accessToken: accessToken,
            refreshToken: refreshToken
        });

    }
    catch(err) {
        console.error(err);
    }

}

export const refreshToken = (req: Request, res: Response) => {

    const { refreshToken } = req.cookies;

    try {
        const result = (verify(refreshToken, config.refreshSecret) as any);

        const accessToken = signToken('access', {
            emailAddress: result.emailAddress,
            id: result.id,
            forename: result.forename,
            surname: result.surname,
            admin: result.admin,
            mobile: result.mobileNumber
        });

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 15
        });

        res.send({
            message: 'Access token has been refreshed',
            accessToken: accessToken
        });

    }
    catch(err) {
        console.error(err);
    }

}