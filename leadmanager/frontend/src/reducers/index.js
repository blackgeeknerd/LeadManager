import { combineReducers } from "redux";
import leads from './leads';

export default combineReducers({
    //since line 6 is the same name we can do line 7
    //leads: leads 
    leads
    //after line 6 or 7 depending on which line you choose to use
    //you then go to reducers folder and create 
    //a leads.js file
});