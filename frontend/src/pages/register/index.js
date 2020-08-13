import React, { Component } from 'react';
import styles from './index.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';

class Register extends Component{
    // constructor(props){
    //     super(props);
    // }
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
                    <label>
                        repeat password:
                        <input type="password" name="re-password"></input>
                    </label>
                    <button type="submit">Register</button>
                </form>
                <Footer />
            </div>
        );
    }
}
export default Register;