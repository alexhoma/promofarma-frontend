import React from 'react';
import {Box, Title} from "../../Common/Html";
import moment from "moment";

class BestRatedTopics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.data === 'undefined') {
            return false;
        }

        // console.log(this.props.data);return false;

        return (
            <Box className="BestRatedTopics">
                <Title heading={'strong'}>
                    Best rated topics
                    <span className="is-pulled-right has-text-primary">
                        {moment().format('MMMM')}
                    </span>
                </Title>

                <table className="table">
                    <tbody>
                    {this.props.data.map((topic, index) =>
                        <tr key={index}>
                            <td width="60%">
                                <b>{index + 1}</b> {topic.key}
                            </td>
                            <td className="has-text-right">
                                {topic.doc_count}
                            </td>
                            <td className="has-text-right">
                                {topic.score}
                            </td>
                        </tr>
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

export default BestRatedTopics;