import { TokenType } from '../types';
import { sign } from 'jsonwebtoken'
import config from '../config';

export const signToken = (type: TokenType, data: any) => {
    const secret = type == 'access' ? config.accessSecret : config.refreshSecret;
    const expiry = type == 'access' ? config.accessExpiry : config.refreshExpiry;

    return sign(data, secret, {
        expiresIn: expiry
    });
}