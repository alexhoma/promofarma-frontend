import React from 'react';
import Trend from 'react-trend';

class MostRatedTopicsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.data.trends === 'undefined') {
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
                                {this.props.data.trends.map((trend, index) =>
                                    <tr key={index}>
                                        <td width="60%">
                                            <b>#{index + 1}</b> {trend.name}
                                        </td>
                                        <td>
                                            <Trend
                                                smooth
                                                autoDraw
                                                autoDrawDuration={2200}
                                                autoDrawEasing="ease-out"
                                                data={trend.data}
                                                gradient={['#09fb7b', '#0dbd30']}
                                                radius={17}
                                                strokeWidth={2.8}
                                                strokeLinecap={'round'}
                                            />
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

export default MostRatedTopicsList;