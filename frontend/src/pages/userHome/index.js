import React, { Component } from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css'
import { Link } from 'react-router-dom';
import IdeaCard from '../../components/ideaCard';
import UserContext from '../../Context';
class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            ideas: [{}]
        });
    }

    async componentDidMount() {

        let info = await fetch('http://localhost:5000/api/idea', {
            method: "GET"
        }).then((answer) => answer.json())
            .then(function (data) {
                return data;
            })
        this.setState({ ideas: info });
    }

    renderIdeas(params) {
        return this.state.ideas.map(idea => {
            return (
                <IdeaCard key={idea._id} title={idea.title} description={idea.description} url={idea.url} id={idea._id} />
            );
        });
    }

    render() {

        return (
            <UserContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <div className={styles.content}>
                                <Header />
                                <div className={styles.ideaWrapper}>
                                    <button className={styles.create}><Link to="/create">Create</Link></button>
                                    <div className={styles.ideas}>
                                        {this.renderIdeas()}
                                    </div>
                                </div>
                            </div>
                            <Footer className={styles.footer} />
                        </div>
                    );
                }}
            </UserContext.Consumer>
        );
    }
}

export default UserHome