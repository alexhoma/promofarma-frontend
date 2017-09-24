import React from 'react';
import {Box, Title} from "../../Common/Html";
import moment from "moment";

class BestRatedTopics extends React.Component {
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

        console.log(this.props.data)
        /**
         * @todo: hardcoded
         */
        let dataProps = this.props.data;
        // let data = [];
        // if (typeof dataProps === 'object') {
        //     data.push(dataProps);
        // } else {
        //     data = dataProps;
        // }

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
                    {(this.state.showAll === false)
                        ? (
                            dataProps.map((topic, index) =>
                                (index < 5) ? (
                                    <tr key={index}>
                                        <td width="60%">
                                            <b>{index + 1}</b> {topic.key}
                                        </td>
                                        {/*<td className="has-text-right">*/}
                                            {/*{topic.doc_count}*/}
                                        {/*</td>*/}
                                        <td className="has-text-right">
                                            {topic.score}
                                        </td>
                                    </tr>
                                ) : null
                            )
                        )
                        : (
                            dataProps.map((topic, index) =>
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
                        : null
                    }
                </div>
            </Box>
        );
    }
}

export default BestRatedTopics;