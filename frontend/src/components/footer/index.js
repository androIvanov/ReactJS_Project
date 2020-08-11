import React, { Component } from 'react';
import styles from './index.module.css';

class Footer extends Component{
    render(){
        return(
            <footer className={styles.footer}>
                <button className={styles.about}>About us</button>
                <div className={styles.contacts}>
                    <div className={styles.number}>Phone number - 08888555523</div>
                </div>
            </footer>
        );
    }
}
export default Footer;