import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './index.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';



function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const history = useHistory();

    const handleEmailWriting = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordWriting = (e) => {
        setPassword(e.target.value);
    }
    const handleRePasswordWriting = (e) => {
        setRePassword(e.target.value);
    }

    const registerHandler = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(promis => promis.json())
        .then(answer => {
            history.push('/login');
        })
    }

    return (
        <div className={styles.wrapper}>
            <Header />
            <form className={styles.form}>
                <label>
                    email:
            <input type="text" name="email" vale={email} onChange={handleEmailWriting}></input>
                </label>
                <label>
                    password:
            <input type="password" name="password" value={password} onChange={handlePasswordWriting}></input>
                </label>
                <label>
                    repeat password:
            <input type="password" name="re-password" value={rePassword} onChange={handleRePasswordWriting}></input>
                </label>
                <button onClick={registerHandler}>Register</button>
            </form>
            <Footer />
        </div>
    );
}
export default Register;