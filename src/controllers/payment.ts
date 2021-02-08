import { Request, Response } from "express";
import { sign } from '../helpers/authbill'

export const processPayment = (req: Request, res: Response) => {

    let result: string = '';
    const signedFields = Object.keys(req.body);

    signedFields.map((key, i) => {
        result += `${key}=${req.body[key]}${i !== signedFields.length - 1 ? ',' : ''}`
    })

    console.log(sign(result))

}