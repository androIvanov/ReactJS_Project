import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function ideaCard(props){
    let path = `/details:${props.id}`;
    return(
        <div className={styles.idea}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.main}>
    <span className={styles.desc}>{props.description}</span>
            <img className={styles.img} src={props.url} alt="idea"></img>
        </div>
        <button className={styles.button}><Link to={path}>Details</Link></button>
    </div>
    );
}
export default ideaCard;