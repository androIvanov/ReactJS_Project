import React, { Component } from 'react';
import styles from './index.module.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = { logged: false }
    }
    render(){
        return(
            <div className={styles.header}> 
                <div className={styles.logo}>IdeaHUB</div>
                <button className={styles.login}>Login</button>
                <button className={styles.register}>Register</button>
                <button className={styles.about}>About</button>
            </div>
        );
    }
}
export default Header;