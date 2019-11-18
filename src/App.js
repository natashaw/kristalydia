import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import './App.scss';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavigationBar />
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/contact" component={Contact} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Layout>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
