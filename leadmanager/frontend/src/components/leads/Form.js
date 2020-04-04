import React, { Component } from 'react';
import {connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addLead } from '../../actions/leads';  

export class Form extends Component {
    //line 4 - 9 is to make each form   input a part of a state of a component
    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });

    // onChange = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }

    onSubmit = e =>{
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message } 
        this.props.addLead(lead); 
        //empty the input after a user submits a valid form
        this.setState({
            name:'',
            email:'',
            message:''
        });
    } 
 
    render() {
        const {name, email, message} = this.state;
        return (
            <div className= "card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.onChange} value={name} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email" onChange={this.onChange} value={email} />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input className="form-control" type="text" name="message" onChange={this.onChange} value={message} />
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div> 
        )
    }
}

export default connect(null, {addLead})(Form);