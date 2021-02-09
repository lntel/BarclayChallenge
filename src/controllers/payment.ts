import { Request, Response } from "express";
import { sign } from '../helpers/authbill'

import fetch from 'node-fetch'
import { uuidv4 } from "../helpers/uuid";
import FormData from 'form-data'
import moment from 'moment'
import { Payment } from "../entity/payment";
import { getRepository } from "typeorm";
import { User } from "../entity/user";

export const processPayment = (req: Request, res: Response) => {

    const {
        amount,
        currency,
        locale
    } = req.body;

    const payment = req.body;

    payment.transaction_uuid = uuidv4();
    payment.reference_number = uuidv4();
    payment.user_id = req.params.id;
    payment.signed_date_time = new Date().toISOString().slice(0, 19) + 'Z'

    const form = new FormData();

    const { signed_field_names } = req.body;

    const signedFieldNames = signed_field_names.split(',');

    let result: string[] = [];

    signedFieldNames.map((signedField: string) => {
        result.push(`${signedField}=${payment[signedField]}`);
        form.append(signedField, payment[signedField]);
    });

    //return console.log(form)

    form.append('signature', sign(result.join(',')));
    
    // fetch('https://testsecureacceptance.cybersource.com/pay', {
    //     method: 'POST',
    //     body: form
    // })
    // .then(async res => {
    //     console.log(await res.text())
    // })

    form.submit('https://testsecureacceptance.cybersource.com/pay', async (err, response) => {
        if(err) {
            return res.status(500).send({
                message: 'An error occurred'
            });
        }

        try {
            const payRepo = getRepository(Payment);
            const userRepo = getRepository(User);
    
            const user = await userRepo.findOne(req.params.id)

            if(!user) {
                return res.status(404).send({
                    message: 'User not found'
                });
            }
    
            const pay = new Payment();

            pay.amount = parseFloat(amount);
            pay.currency = currency;
            pay.locale = locale;
            pay.reference_number = payment.reference_number;
            pay.signed_date_time = payment.signed_date_time;
            pay.transaction_type = 'authorize';
            pay.user = user;

            await payRepo.save(pay);

            res.send({
                message: 'Payment successful',
    
            });

        } catch (error) {
            console.error(error);
        }
    })

}

export const getAllPayments = async (req: Request, res: Response) => {

    try {
        
        const paymentRepo = getRepository(Payment);

        const result = await paymentRepo.find({
            relations: ['user']
        })

        res.send(result);

    } catch (error) {
        console.error(error);
    }

}