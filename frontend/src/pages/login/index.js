import styles from './index.module.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import UserContext from '../../Context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const context = useContext(UserContext);

    const handleEmailWiriting = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordWriting = (e) => {
        setPassword(e.target.value);
    }
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(promise => {
            const token = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${token}`;
            promise.json();
            fetch('http://localhost:5000/api/user/',{
                method: "GET"
            }).then(answer => answer.json())
            .then((data) => {
                context.login(data.find(x => x._id === parseJwt(token).id));
            })

        })
            .then(() => {
                history.push('/userHome');
            })
    }


    return (
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