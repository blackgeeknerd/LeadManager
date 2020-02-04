import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads'

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads : PropTypes.func.isRequired,
        deleteLead : PropTypes.func.isRequired
    };  

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.leads.map(lead => (
                            <tr key = { lead.id }>
                               <td>{ lead.id }</td> 
                               <td>{ lead.name }</td> 
                               <td>{ lead.email }</td> 
                               <td>{ lead.message }</td> 
                               <td><button onClick={this.props.deleteLead.bind(this, lead.id)} className = 'btn btn-danger btn-sm'>Delete</button></td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
            
        )
    }
}

const mapStateToProps = state => ({
    // the first leads in line 18 can be named anythin you want
    leads: state.leads.leads
    //state.leads means we want the leads reducer, while the last
    //leads is the part of the state dt we want which is also called
    //leads in the leads reducer file
});

// export default Leads
export default connect(mapStateToProps, { getLeads, deleteLead })
(Leads);
