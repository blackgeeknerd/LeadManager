import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

//import the react-alert provider
import { Provider as AlertProvider } from 'react-alert';

//import react alert-template(line 8&9)
import AlertTemplate from "react-alert-template-basic";
import Alerts from './layout/Alerts';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';


import { Provider } from 'react-redux';
import store from "../store";

//Alert options
const alertOptions = {
    timeout: 3000, //3000ms = 3seconds
    position : 'top center' // you can use a different positioning 
}


// create the app class and extend React.Component imported in line 1
class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <AlertProvider template ={AlertTemplate} 
                    {...alertOptions} >
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className='container'>
                            <Dashboard />
                        </div> 
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}
// inserting the main app into an element with an id of 'app'
ReactDom.render(<App />, document.getElementById('app'));