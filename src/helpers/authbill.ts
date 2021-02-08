import { createHmac } from 'crypto'
import config from '../config'

import btoa from 'btoa'

interface Payment {
    
}

export const sign = (data: any) => {
    return btoa(createHmac('sha256', config.barclaySecret).digest(data));
}

const authbill = () => {
    console.log(sign({
        test: 12
    }))
}

export default authbill;