import React, { Component } from 'react';
import styles from './index.module.css';
import Feature from '../feature';

class Features extends Component {
    
    render() {
        return (
            <div className={styles.featureWrapper}>
                <span className={styles.title}>IdeaHUB features you can enjoy!</span>
                <div className={styles.features}>
                    <Feature />
                    <Feature />
                    <Feature />
                </div>
            </div>
        );
    }
}
export default Features;