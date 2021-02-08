import { Request, Response } from "express";
import { sign } from '../helpers/authbill'

import fetch from 'node-fetch'
import { uuidv4 } from "../helpers/uuid";
import FormData from 'form-data'

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

    const { signed_field_names } = req.body;

    const payment = req.body;
    
    payment.transaction_uuid = uuidv4(),
    payment.reference_number = uuidv4(),
    payment.signed_date_time = new Date().toISOString();
    
    let result: string[] = [];
    let fields: string = '';
    const signedFields = signed_field_names.split(',');

    signedFields.map((field: string, i: number) => {
        result.push(`${field}=${req.body[field]}`)
    })

    fields = result.join(',');

    const data = new FormData();

    Object.keys(payment).map(key => {
        data.append(key, payment[key])
    })

    //return console.log(fields)

    data.append('signature', sign(fields))

    console.log(data)

    fetch('https://testsecureacceptance.cybersource.com/pay', {
        method: 'POST',
        body: data
    })
    .then(async response => {
        console.log(await response.text())
    })

}