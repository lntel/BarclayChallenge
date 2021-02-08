import { ValidatorOptions } from "../types";

export const createUserValidator: ValidatorOptions[] = [{
    key: 'emailAddress',
    name: 'Email address',
    expression: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
}, {
    key: 'password',
    name: 'Password',
}, {
    key: 'mobileNumber',
    name: 'Mobile Number'
}]

export const loginUserValidator: ValidatorOptions[] = [
    {
        key: 'emailAddress',
        name: 'Email address',
        expression: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    },
    {
        key: 'password',
        name: 'Password'
    }
]