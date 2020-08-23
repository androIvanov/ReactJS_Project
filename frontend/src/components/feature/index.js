import React, { Component } from 'react';
import styles from './index.module.css';

class Feature extends Component{

    render(){
        return(
            <div>
                <img className={styles.icon} src="https://cdn.onlinewebfonts.com/svg/img_224481.png" alt="Feature display" />
                <p className={styles.title}>{this.props.title}</p>
                <p className={styles.desc}>{this.props.text}</p>
            </div>
        );
    }

}

export default Feature;