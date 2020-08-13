import React, { Component } from 'react';
import styles from './index.module.css';
import { Link } from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <footer className={styles.footer}>
                <button className={styles.about}><Link to="/about">About us</Link></button>
                <div className={styles.contacts}>
                    <div className={styles.number}>Phone number - 08888555523</div>
                </div>
            </footer>
        );
    }
}
export default Footer;