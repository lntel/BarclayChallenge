import { NextFunction, Request, Response } from "express"
import { ValidatorOptions } from "../types"

export const validate = (e: ValidatorOptions | ValidatorOptions[]) => {
    return (req: Request, res: Response, next: NextFunction) => {

        console.log(e)

    }
}