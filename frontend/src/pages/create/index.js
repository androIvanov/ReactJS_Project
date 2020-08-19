import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from './index.module.css';

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            title: "",
            desc: "",
            url: ""
        })
    }

    handleTitle(){

    }
    handleDesc(){

    }
    handleUrl(){

    }
    handleSubmit(){

    }

    render() {
        return (
            <div>
                <div className={styles.content}>
                    <Header />
                    <form className={styles.form}>
                        <label className={styles.title}>
                            Enter Title:
                        <input className={styles.titleInput} name="title" value={this.state.title} onChange={this.handleTitle}></input>
                        </label>
                        <label className={styles.desc}>
                            Enter some description:
                        <input className={styles.descInput} name="desc" value={this.state.desc} onChange={this.handleDesc}></input>
                        </label>
                        <label className={styles.url}>
                            Enter some image URL:
                        <input className={styles.urlInput} name="url" value={this.state.url} onChange={this.handleUrl}></input>
                        </label>
                        <button onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default Create;