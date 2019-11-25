import React, { Component } from 'react';
import axios from 'axios';
import * as moment from 'moment';
import './GithubCards.css';
import 'babel-polyfill';

export default class GithubCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topHundredRepos: [],
            checkBox: false,
            commitDetails: []
        }
        this.getRepos = this.getRepos.bind(this);
        this.getCommitList = this.getCommitList.bind(this);
        this.getCommitListRepo = this.getCommitListRepo.bind(this);
    }

    async getRepos() {
        // construct URL for top 100 starred repos
        var BASE_URL = `https://api.github.com`;
        var SEARCH_REPO = `/search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=100`;
        var TOP_HUNDRED_URL = BASE_URL + SEARCH_REPO;

        axios.get(TOP_HUNDRED_URL)
            .then(result => {
                result.data.items.map(item => {
                    this.setState({
                        topHundredRepos: this.state.topHundredRepos.concat({
                            "name": item.name,
                            "url": item.url,
                            "starCount": item.stargazers_count,
                            "loginName": item.owner.login
                        })
                    })
                })
            }).catch(e => {
                console.error(e)
            })
    }

    getCommitList() {
        if (!this.state.checkBox) {
            this.setState({
                checkBox: true
            })
            // construct URL for list of commits on those repos
            let timeOneDayBefore = moment.utc().subtract(24, "hours").format("YYYY-MM-DDTHH:mm:ss");

            var BASE_URL = `https://api.github.com`;
            this.state.topHundredRepos.map(item => {
                axios.get(BASE_URL + `/repos/${item.loginName}/${item.name}/commits?since=${timeOneDayBefore}`)
                    .then(result => { })
                    .catch(e => {
                        console.error(e);
                    })
            })
        } else if (this.state.checkBox) {
            this.setState({
                checkBox: false
            })
        }
    }

    getCommitListRepo() {
        let timeOneDayBefore = moment.utc().subtract(24, "hours").format("YYYY-MM-DDTHH:mm:ss");
        var BASE_URL = `https://api.github.com`;
        this.state.topHundredRepos.map(item => {
            axios.get(BASE_URL + `/repos/${item.loginName}/${item.name}/commits?since=${timeOneDayBefore}`)
                .then(result => { })
                .catch(e => {
                    console.error(e);
                })
        })

    }

    render() {
        return (
            <div className="centered">
                <div className="action_buttons">
                    <button className="repos_list" onClick={this.getRepos}>Get repos</button>
                    <span>Get the list of commits in last 24 hours</span>
                    <input className="check_box"
                        type="checkbox"
                        onChange={this.getCommitList} />
                </div>
                {this.state.topHundredRepos.map((repo, index) =>
                    <ul className="cards" key={index}>
                        <li key={repo.name} className="card">
                            <section className="card_inner">
                                <div className="card_header">
                                    <h3 id={repo.name} onClick={this.getCommitListRepo}>{repo.name}</h3>
                                </div>
                                <div className="card_info">
                                    <p>GitHub URL : {repo.url}</p>
                                    <p>Star Count: {repo.starCount}</p>
                                </div>
                                {this.state.checkBox &&
                                    <div className="commit_list">
                                        here is the list of commits
                                    </div>}
                            </section>
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}
