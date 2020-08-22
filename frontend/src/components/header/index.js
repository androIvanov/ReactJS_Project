import React, { Component, useContext, Profiler } from 'react';
import styles from './index.module.css';
import { Link } from "react-router-dom";
import UserContext from '../../Context';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { logged: false }
    }

    render() {
        return (
            <UserContext.Consumer>
                {(context) => {
                    if (context.logged === true) {
                        let profile = `/profile:${context.user._id}`;
                        return (
                            <div className={styles.header}>
                                <div className={styles.logo}><Link to="/userHome">IdeaHUB</Link></div>
                                <button className={styles.login} onClick={context.logout}><Link to="/logout">Logout</Link></button>
                                <button className={styles.register}><Link to={profile}>Profile</Link></button>
                                <button className={styles.about}><Link to="/about">About</Link></button>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div className={styles.header}>
                                <div className={styles.logo}><Link to="/">IdeaHUB</Link></div>
                                <button className={styles.login}><Link to="/login">Login</Link></button>
                                <button className={styles.register}><Link to="/register">Register</Link></button>
                                <button className={styles.about}><Link to="/about">About</Link></button>
                            </div>
                        );
                    }
                }}
            </UserContext.Consumer>
        );
    }
}
export default Header;