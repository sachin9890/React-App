import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

// Vendor CSS
import 'bootstrap/dist/css/bootstrap.css';

import Table from './component/Table';
import Form from './component/Form';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Table} />
                        <Route exact path='/form/:type' component={Form} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
