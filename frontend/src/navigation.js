import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import GuestHome from './pages/guestHomePage';
import About from './pages/about';
import Register from './pages/register/index';
import Login from './pages/login/index';
import UserHome from './pages/userHome';
import Create from './pages/create';
import Profile from './pages/profile';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/profile:id"><Profile /></Route>
                <Route path="/create"><Create /></Route>
                <Route path="/userHome"><UserHome /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/register"><Register /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/"><GuestHome /></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navigation;