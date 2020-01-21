import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header';
import  Dashboard from './leads/Dashboard';


// create the app class and extend React.Component imported in line 1
class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <Dashboard />
                </div> 
            </Fragment>
        )
    }
}
// inserting the main app into an element with an id of 'app'
ReactDom.render(<App />, document.getElementById('app'));