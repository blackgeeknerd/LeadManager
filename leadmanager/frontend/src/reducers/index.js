import { combineReducers } from "redux";
import leads from './leads';

//import the error module line 5
import errors from './errors';

//import the message module in line 6
import messages from './messages';

export default combineReducers({
    //since line 6 is the same name we can do line 7
    //leads: leads 
    leads,
    //after line 6 or 7 depending on which line you choose to use
    //you then go to reducers folder and create 
    //a leads.js file


    //pass the errors into the combineReducers method
    errors,
    //pass the messages into the combineReducers method
    messages
});