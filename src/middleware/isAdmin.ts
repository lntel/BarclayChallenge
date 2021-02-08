import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import config from "../config";

export default (req: Request, res: Response) => {

    const { accessToken } = req.cookies;

    try {
        const result = verify(accessToken, config.accessSecret);

        
    }
    catch(err) {
        console.error(err);
    }

}