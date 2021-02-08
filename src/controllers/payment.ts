import { Request, Response } from "express";
import { sign } from '../helpers/authbill'

import fetch from 'node-fetch'
import { uuidv4 } from "../helpers/uuid";
import FormData from 'form-data'
import moment from 'moment'

export const processPayment = (req: Request, res: Response) => {

    // const {
    //     locale,
    //     transaction_type,
    //     amount,
    //     currency,
    //     access_key,
    //     profile_id,
    //     bill_to_address_city,
    //     bill_to_address_country,
    //     bill_to_address_line1,
    //     bill_to_address_postal_code,
    //     bill_to_email,
    //     bill_to_forename,
    //     bill_to_surname
    // } = req.body;

    const payment = req.body;

    payment.transaction_uuid = uuidv4();
    payment.reference_number = uuidv4();
    payment.signed_date_time = new Date().toISOString().slice(0, 19) + 'Z'

    console.log(payment.signed_date_time)

    const form = new FormData();

    const { signed_field_names } = req.body;

    const signedFieldNames = signed_field_names.split(',');

    let result: string[] = [];

    signedFieldNames.map((signedField: string) => {
        result.push(`${signedField}=${payment[signedField]}`);
        form.append(signedField, payment[signedField]);
    });

    //return console.log(sign(result.join(',')))

    form.append('signature', sign(result.join(',')));
    
    fetch('https://testsecureacceptance.cybersource.com/pay', {
        method: 'POST',
        body: form
    })
    .then(async res => {
        console.log(res.status)
    })

    // form.submit('https://testsecureacceptance.cybersource.com/pay', async (err, response) => {
    //     console.log(err);
    //     console.log(response.statusMessage)
    // })

}