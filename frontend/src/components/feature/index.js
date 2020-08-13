import React, { Component } from 'react';
import styles from './index.module.css';

class Feature extends Component{

    render(){
        return(
            <div>
                <img className={styles.icon} src="https://cdn.onlinewebfonts.com/svg/img_224481.png" alt="Feature display" />
                <p className={styles.title}>Feature Title</p>
                <p className={styles.desc}>Some description for the fature that defines my website.<br /> This should be pretty straight forward and clear.</p>
            </div>
        );
    }

}

export default Feature;