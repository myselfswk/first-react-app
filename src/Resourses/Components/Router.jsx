import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import Services from './Services';

function Router() {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/services">Services</Link>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => {
                    return (
                        <About name="About us" />
                    )
                }} />
                <Route path="/contact/:fname/:lname" component={Contacts} />
                <Route path="/contact" component={Contacts} />
                <Route path="/services" component={() => {
                    return (
                        <Services name="Services" />
                    )
                }} />
            </Switch>
        </div>
    )
}

export default Router;
