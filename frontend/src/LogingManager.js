import React, { Component } from 'react';
import UserContext from './Context';

class LogingManager extends Component{
    constructor(props){
        super(props)
        this.state = ({
            logged: false,
            user: null
        });
    }

    login = () => {
    
        this.setState({
            logged: true
        })
    }
    logout = () => {
        this.setState({
            logged: false
        })
    }

    render(){
        return (
            <UserContext.Provider value={
               {
                   logged: this.state.logged,
                   user: this.state.user,
                   login: this.login,
                   logout: this.logout
               }
            }>
                {this.props.children}
            </UserContext.Provider>
        );
    };
}
export default LogingManager;