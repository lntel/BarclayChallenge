import { ValidatorOptions } from "../types";

export const createUserValidator: ValidatorOptions[] = [{
    key: 'emailAddress',
    name: 'Email address',
    expression: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
}, {
    key: 'password',
    name: 'Password',
    expression: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
}, {
    key: 'mobileNumber',
    name: 'Mobile Number',
    expression: /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/g
},
{
    key: 'forename',
    name: 'Forename',
    expression: /^[a-z ,.'-]+$/i
},
{
    key: 'surname',
    name: 'Surname',
    expression: /^[a-z ,.'-]+$/i
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