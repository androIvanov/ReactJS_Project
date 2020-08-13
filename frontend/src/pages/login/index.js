import React, { Component } from 'react';
import styles from './index.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';

class Register extends Component{

    render(){
        return(
            <div className={styles.wrapper}>
                <Header />
                <form className={styles.form}>
                    <label>
                        email:
                        <input type="text" name="email"></input>
                    </label>
                    <label>
                        password:
                        <input type="password" name="password"></input>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <Footer />
            </div>
        );
    }
}
export default Register;