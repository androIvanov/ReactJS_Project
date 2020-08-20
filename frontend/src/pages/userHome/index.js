import React, { Component } from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css'
import { Link } from 'react-router-dom';
class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            ideas: [{}]
        });
    }
    async fetcher(params) {
        fetch('http://localhost:5000/api/idea',{
            method: "GET"
        }).then(answer => {
            return await answer
        })
    }
    render() {
    this.fetcher()

        return (
            <div>
                <div className={styles.content}>
                    <Header />
                    <div className={styles.ideaWrapper}>
                        <button className={styles.create}><Link to="/create">Create</Link></button>
                        <div className={styles.ideas}>
                            <div className={styles.idea}>
                                <p className={styles.title}>Title</p>
                                <div className={styles.main}>
                                    <span className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five < br />centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                    <img className={styles.img} src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="idea"></img>
                                </div>
                                <button className={styles.button}>Details</button>
                            </div>
                            <div className={styles.idea}>
                                <p className={styles.title}>Title</p>
                                <div className={styles.main}>
                                    <span className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five < br />centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                    <img className={styles.img} src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="idea"></img>
                                </div>
                                <button className={styles.button}>Details</button>
                            </div>
                            <div className={styles.idea}>
                                <p className={styles.title}>Title</p>
                                <div className={styles.main}>
                                    <span className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five < br />centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                    <img className={styles.img} src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="idea"></img>
                                </div>
                                <button className={styles.button}>Details</button>
                            </div>
                            <div className={styles.idea}>
                                <p className={styles.title}>Title</p>
                                <div className={styles.main}>
                                    <span className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five < br />centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                                    <img className={styles.img} src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt="idea"></img>
                                </div>
                                <button className={styles.button}>Details</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer className={styles.footer} />
            </div>
        );
    }
}

export default UserHome