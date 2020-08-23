import React from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function Deatails(){
    let id = document.location.href.split(':')[3];
    async function getIdea(id){
        fetch('http://localhost:5000/api/idea/').then(answer => answer.json())
        .then(data => {
            
        })
    }
    getIdea();
    return(
        <div>
            <div className={styles.content}>
                <Header />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}
export default Deatails
