import React, { Component } from 'react';
import UserContext from './Context';

class LogingManager extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            logged: false,
            user: null
        });
    }

    login = (user) => {

        this.setState({
            logged: true,
            user: user
        })
    }
    logout = () => {
        this.setState({
            logged: false
        })
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    // componentDidMount(){
    //     if(document.cookie === ""){
    //         this.logout();
    //     }else{
    //         this.login();
    //     }
    // }
    render() {
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