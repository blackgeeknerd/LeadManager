import { CREATE_MESSAGE, GET_ERRORS } from './types';

//ACTION TO CREATE MESSAGE
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload:msg
    };
};

//ACTION TO RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS, 
        payload: { msg, status }
    };
};