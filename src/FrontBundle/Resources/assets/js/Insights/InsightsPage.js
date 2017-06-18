import React from 'react';

import TrendingTopics from "./Insights/TrendingTopicsBlock/TrendingTopics";
import LatestPost from "./Insights/LatestPost";
import BestRatedTopics from "./Insights/BestRatedTopics";
import {
    Hero, ColumnsSection, Column
} from "../Common/Html";

import axios from 'axios';
import {BASE_URL} from "../config";


class InsightsPage extends React.Component {
    constructor() {
        super();
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            isFetching: true,
            mostSpokenTopics: [],
            mostRatedTopics: [],
            latestPost: {
                'created_at': '',
                'source': '',
                'content': ''
            },
        };
    }

    fetchData() {
        const self = this;

        axios.all([
            axios.get(BASE_URL + '/mostSpokenTopicsOfMonth'),
            axios.get(BASE_URL + '/mostRatedTopicsOfTheMonth'),
            axios.get(BASE_URL + '/lastPost')
        ])
        .then(axios.spread((
            mostSpokenTopicsResponse,
            mostRatedTopicsResponse,
            latestPostTopics) =>
        {
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
            () => this.fetchData(), 30000
        );
    }

    render() {
        return (
            <section className="InsightsPage">
                <Hero>Promofarma Trends</Hero>

                {/*Result section*/}
                {(this.state.isFetching === true)
                    ? (
                        <ColumnsSection>
                            <Column>
                                <span className="spinner"/>
                            </Column>
                        </ColumnsSection>
                    )
                    : (
                        <ColumnsSection>
                            <Column>
                                <TrendingTopics
                                    data={this.state.mostSpokenTopics}
                                />
                            </Column>
                            <Column>
                                <BestRatedTopics
                                    data={this.state.mostRatedTopics}
                                />
                            </Column>
                            <Column>
                                <LatestPost
                                    data={this.state.latestPost}
                                />
                            </Column>
                        </ColumnsSection>
                    )
                }
            </section>
        );
    }
}

export default InsightsPage;