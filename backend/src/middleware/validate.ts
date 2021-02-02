import { NextFunction, Request, Response } from "express"
import { ValidatorOptions } from "../types"


export const validate = (e: ValidatorOptions | ValidatorOptions[]) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const bodyKeys = Object.keys(req.body);

        if((e as ValidatorOptions[]).length) {

        } else {

            const name = (e as ValidatorOptions).name ? (e as ValidatorOptions).name : (e as ValidatorOptions).key;

            if(bodyKeys.length) {

                // Check if the bodyKeys array contains the ValidationOption key
                if(bodyKeys.indexOf((e as ValidatorOptions).key) == -1) {
                    return res.status(400).send({
                        message: `${name} parameter was not found`
                    });
                }

                const value = req.body[(e as ValidatorOptions).key];

                if((e as ValidatorOptions).expression && !value.match((e as ValidatorOptions).expression)) {
                    return res.status(400).send({
                        message: `${name} is invalid`
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