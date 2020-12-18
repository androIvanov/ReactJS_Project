import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.module.css';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Create(){
     let [title, setTitle] = useState("");
     let [desc, setDesc] = useState("");
     let [url, setUrl] = useState("");
     let history = useHistory();

     function handleTitle(e){
        setTitle(e.target.value)
     }
     function handleDesc(e){
        setDesc(e.target.value);
     }
     function handleUrl(e){
        setUrl(e.target.value);
     }
     function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
     async function handleSubmit (e){
         e.preventDefault();
         console.log("Hello?");
         let cookie = document.cookie.split('=')[1];
        
        fetch('http://localhost:5000/api/idea', {
          method: 'POST',
          body: JSON.stringify({
            description: desc,
            title: title,
            url: url,
            _id: parseJwt(cookie).id
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((answer) => {
            history.push('/userHome');
        })
        console.log("Hey");
        console.log("Develop");
    }

    return (
        <div>
            <div className={styles.content}>
                <Header />
                <form className={styles.form}>
                    <label className={styles.title}>
                        Enter Title:
                    <input className={styles.titleInput} name="title" value={title} onChange={handleTitle}></input>
                    </label>
                    <label className={styles.desc}>
                        Enter some description:
                    <input className={styles.descInput} name="desc" value={desc} onChange={handleDesc}></input>
                    </label>
                    <label className={styles.url}>
                        Enter some image URL:
                    <input className={styles.urlInput} name="url" value={url} onChange={handleUrl}></input>
                    </label>
                    <button className={styles.button} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Create;