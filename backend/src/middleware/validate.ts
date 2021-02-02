import { NextFunction, Request, Response } from "express"
import { ValidatorOptions } from "../types"


export const validate = (e: ValidatorOptions | ValidatorOptions[]) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const bodyKeys = Object.keys(req.body);

        if((e as ValidatorOptions[]).length) {

        } else {
            if(bodyKeys.length) {
                if(bodyKeys.indexOf((e as ValidatorOptions).key) == -1) {
                    return res.status(400).send({
                        message: `${(e as ValidatorOptions).name ? (e as ValidatorOptions).name : (e as ValidatorOptions).key} parameter was not found`
                    });
                }
            } else {
                return res.status(400).send({
                    message: 'No parameters found'
                });
            }
        }

    }
}