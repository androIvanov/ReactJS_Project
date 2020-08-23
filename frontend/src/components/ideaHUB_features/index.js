import React, { Component } from 'react';
import styles from './index.module.css';
import Feature from '../feature';

class Features extends Component {
    
    render() {
        return (
            <div className={styles.featureWrapper}>
                <span className={styles.title}>IdeaHUB features you can enjoy!</span>
                <div className={styles.features}>
                    <Feature text="Get inspired, see waht other people are onto." title="Inspiration"/>
                    <Feature text="Make an account and share your wonderfull ideas." title="Sharing"/>
                    <Feature text="Feel free to put in use anything good that you read" title="Improve your daily life"/>
                </div>
            </div>
        );
    }
}
export default Features;