import React from 'react';
import Topic from "./Topic";
import {Box, Title} from "../../../Common/Html";
import moment from "moment";

class TrendingTopics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAll: false
        }
    }

    render() {
        if (typeof this.props.data === 'undefined') {
            return false;
        }

        return (
            <Box className="TrendingTopics">
                <Title heading={'strong'}>
                    Latest trending topics
                    <span className="is-pulled-right has-text-primary">
                        {moment().format('MMMM')}
                    </span>
                </Title>

                <table className="table">
                    <tbody>
                    {(this.state.showAll === false)
                        ? (
                            this.props.data.map((topic, index) =>
                                (index < 5) ? (
                                    <Topic
                                        key={index}
                                        topic={topic}
                                        index={index}
                                    />
                                ) : null
                            )
                        )
                        : (
                            this.props.data.map((topic, index) =>
                                <Topic
                                    key={index}
                                    topic={topic}
                                    index={index}
                                />
                            )
                        )
                    }
                    </tbody>
                </table>

                <div className="has-text-centered">
                    {(this.state.showAll !== true)
                        ? (
                            <a onClick={() => this.setState({
                                showAll: true
                            })}>Show all</a>
                        )
                        : ''
                    }
                </div>
            </Box>
        );
    }
}

export default TrendingTopics;
