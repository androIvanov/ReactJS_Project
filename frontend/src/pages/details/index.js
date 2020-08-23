import React, { useState, Component } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

class Deatails extends Component {

    constructor(props){
        super(props);
        this.state = ({
            author: {
                posts: []
            },
            title: '',
            description: '',
            url: ''
        });
        this.id = document.location.href.split(':')[3]
    }
    componentDidMount(){
        fetch('http://localhost:5000/api/idea/').then(answer => answer.json())
        .then(data => {
            let result = data.find(x => x._id === document.location.href.split(':')[3]);
            this.setState({
                author: result.author,
                title: result.title,
                description: result.description,
                url: result.url
            });
        })
    }
    
    authorChecker(params) {
        console.log(parseJwt(document.cookie.split('=')[1]).id);
        console.log(this.state.author._id);
        if(parseJwt(document.cookie.split('=')[1]).id === this.state.author._id){
            return(<button>Delete</button>);
        }else{
            return(<div></div>);
        }
    }

    render(){
        return (
            <div>
                <div className={styles.content}>
                    <Header />
                    <div className={styles.ideaCard}>
                        <img className={styles.img} src={this.state.url}></img>
                        <h1>{this.state.title}</h1>
                        <h3>By {this.state.author.username}</h3>
                        <p>{this.state.description}</p>
                        {this.authorChecker()}
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        );
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
export default Deatails
