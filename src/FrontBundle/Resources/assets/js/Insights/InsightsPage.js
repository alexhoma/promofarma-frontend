import React from 'react';
import MostSpokenTopicsList from "./MostSpokenTopicsList";
import LatestPost from "./LatestPost";
import MostRatedTopicsList from "./MostRatedTopicsList";
import axios from 'axios';
import { BASE_URL } from "../config";

class InsightsPage extends React.Component {
    constructor() {
        super();
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            isFetching: true,
            mostSpokenTopics: [],
            mostRatedTopics: [],
            latestPost: {
                'created_at':'',
                'source': '',
                'content': ''
            },
        };
    }

    fetchData() {
        const self = this;

        axios.all([
            axios.get(BASE_URL + '/most-spoken-topics'),
            axios.get(BASE_URL + '/most-rated-topics'),
            axios.get(BASE_URL + '/latest-post')
        ])
        .then(axios.spread( (
            mostSpokenTopicsResponse,
            mostRatedTopicsResponse,
            latestPostTopics
        ) => {
            self.setState({
                'isFetching': false,
                'mostSpokenTopics': mostSpokenTopicsResponse.data,
                'mostRatedTopics': mostRatedTopicsResponse.data,
                'latestPost': latestPostTopics.data
            })
        }));
    }

    componentDidMount() {
        this.fetchData();
        this.interval = setInterval(
            () => this.fetchData(), 10000
        );
    }

    render() {
        let hero = (
            <header className="hero is-success is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Promofarma Trends
                        </h1>
                    </div>
                </div>
            </header>
        );

        if (this.state.isFetching === true) {
            return (
                <section className="InsightsPage">
                    {hero}
                    {/*Result section*/}
                    <section className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column">
                                    <span className="spinner" />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )
        }

        return (
            <section className="InsightsPage">
                {/*Hero with input on it*/}
                {hero}

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <MostSpokenTopicsList
                                    data={this.state.mostSpokenTopics}
                                />
                            </div>
                            <div className="column">
                                <MostRatedTopicsList
                                    data={this.state.mostRatedTopics}
                                />
                            </div>
                            <div className="column">
                                <LatestPost
                                    data={this.state.latestPost}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default InsightsPage;