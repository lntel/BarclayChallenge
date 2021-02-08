import { HmacSHA256, enc } from 'crypto-js'
import config from '../config'

import btoa from 'btoa'
import { createHmac } from 'crypto'
import hash from 'hash.js'

interface Payment {
    
}

export const sign = (data: string) => {

    console.log(data)

    // return createHmac('sha256', config.barclaySecret, {
    //     encoding: 'binary',
    // }).update(data).digest('base64');
    //return HmacSHA256(data, config.barclaySecret).toString(enc.Hex)
    return HmacSHA256(data, config.barclaySecret).toString(enc.Base64);

    //return HmacSHA256(data, config.barclaySecret).toString()
}

const authbill = () => {

}

export default authbill;