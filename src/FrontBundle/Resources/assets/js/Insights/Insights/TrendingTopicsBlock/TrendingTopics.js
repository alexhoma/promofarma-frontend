import React from 'react';
import Topic from "./Topic";
import {Box} from "../../../Common/Html";

class TrendingTopics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.data.trends === 'undefined') {
            return false;
        }

        return (
            <Box>
                <strong>Latest trending topics</strong>
                <hr />
                <table className="table is-narrow">
                    <tbody>
                    {this.props.data.trends.map((trend, index) =>
                        <Topic
                            key={index}
                            trend={trend}
                            index={index}
                        />
                    )}
                    </tbody>
                </table>

                <div className="has-text-centered">
                    <a href="#">Show all</a>
                </div>
            </Box>
        );
    }
}

export default TrendingTopics;
