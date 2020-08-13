import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuestHome from './pages/guestHomePage';
import About from './pages/about';
import Register from './pages/register/index';
import Login from './pages/login/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login"><Login /></Route>
                <Route path="/register"><Register /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/"><GuestHome /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navigation;