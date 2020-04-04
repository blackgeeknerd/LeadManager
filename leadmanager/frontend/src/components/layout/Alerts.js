import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    //add proptypes line 8 - 10
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

   //pertaining to the alert error display on form submit ..Validation
    componentDidUpdate(prevProps){
        //performing a little destructuring, we would pull out 'error' and 'alert' for comparision
        const { error, alert, message } = this.props; 

        if(error != prevProps.error){
            //display message of where error is.
            if(error.msg.name) alert.error(`Name: ${error.msg.name.join()}`)
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
        }

        if(message != prevProps.message) {
            if(message.deletelead) alert.success(message.deletelead)
            if(message.addLead) alert.success(message.addLead)  
        }

    }

    render() {
        return <Fragment />;
    } 
}

//create mapstate to props
const mapStateToProps = state => ({
    error : state.errors,
    message: state.messages
});


export default connect(mapStateToProps)(withAlert()(Alerts));