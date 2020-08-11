import React, { Component } from 'react';
import styles from './index.module.css';

class Hero extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className={styles.hero}>
                <div className={styles.text}>
                    <div className={styles.headline}>
                        <span>Why choose IdeaHUB?</span>
                    </div>
                    <div className={styles.answer}>
                        <span>Its fun and inspiring to share and read ideas.<br/> Some are crazy and others are just showe thoughts,<br /> there is no limitations! Share your bright ideas right now on IdeaHUB!</span>
                    </div>
                    <button className={styles.register}>Register!</button>
                </div>
                <div className={styles.picture}>
                </div>
            </div>
        );
    };
}
export default Hero;