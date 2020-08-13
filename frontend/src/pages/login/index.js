import styles from './index.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmailWiriting = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordWriting = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password
            }),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(promise => {
            const token = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${token}`;
            promise.json() 
        })
        .then(() => {
            history.push('/');
        })
    }
    return(
        <div className={styles.wrapper}>
            <Header />
            <form className={styles.form}>
                <label>
                    email:
                    <input type="text" name="email" value={email} onChange={handleEmailWiriting}></input>
                </label>
                <label>
                    password:
                    <input type="password" name="password" value={password} onChange={handlePasswordWriting}></input>
                </label>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <Footer />
        </div>
    );
}
export default Login;