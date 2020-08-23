import React, { Component } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import IdeaCard from '../../components/ideaCard';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            user: {
                posts: []
            }
        });
        this.id = document.location.href.split(":")[3];
    }

    async componentWillMount() {

        let users = await fetch('http://localhost:5000/api/user', {
            method: "GET"
        }).then((answer) => answer.json())
            .then(function (data) {
                return data;
            })
        let userWeNeed = users.find(x => x._id === this.id)
        this.setState({ user: userWeNeed });
    }

    renderIdeas(params) {
        return this.state.user.posts.map(idea => {
            return (
                <IdeaCard key={idea._id} title={idea.title} description={idea.description} url={idea.url} id={idea._id}/>
            );
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className={styles.content}>
                    <div className={styles.userCard}>
                        <p>Wellcome!</p>
                        <p>{this.state.username}</p>
                    </div>
                    <div className={styles.subTitle}>
                        <span>Here are your publications:</span>
                    </div>
                    <div className={styles.publications}>
                        {this.renderIdeas()}
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Profile