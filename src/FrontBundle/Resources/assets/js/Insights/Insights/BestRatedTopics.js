import React from 'react';
import Trend from 'react-trend';

class BestRatedTopics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.data === 'undefined') {
            return false;
        }

        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <strong>Most rated topics</strong>
                            <hr />
                            <table className="table is-narrow">
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
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default BestRatedTopics;