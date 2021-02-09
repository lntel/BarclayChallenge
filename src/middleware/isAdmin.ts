import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../config";
import { User } from "../entity/user";

export default async (req: Request, res: Response, next: NextFunction) => {

    const { accessToken } = req.cookies;

    try {

        console.log("test")
        const result = verify(accessToken, config.accessSecret) as any;

        if(!await User.isAdmin(result.id)) {
            return res.status(403).send({
                message: 'Only admins can access this route'
            });
        }

        req.params.id = result.id;

        next();
    }
    catch(err) {
        console.error(err);
        return res.status(401).send({
            message: 'You must be signed in to access this page'
        });
    }

}