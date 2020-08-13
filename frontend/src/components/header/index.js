import React, { Component } from 'react';
import styles from './index.module.css';
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = { logged: false }
    }
    render(){
        return(
            <div className={styles.header}> 
                <div className={styles.logo}><Link to="/">IdeaHUB</Link></div>
                <button className={styles.login}><Link to="/login">Login</Link></button>
                <button className={styles.register}><Link to="/register">Register</Link></button>
                <button className={styles.about}><Link to="/about">About</Link></button>
            </div>
        );
    }
}
export default Header;