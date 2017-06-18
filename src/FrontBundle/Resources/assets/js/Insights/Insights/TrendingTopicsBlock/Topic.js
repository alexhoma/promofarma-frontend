import React from 'react';
import Trend from 'react-trend';

class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td width="60%">
                    <b>#{this.props.index + 1}</b> {this.props.trend.name}
                </td>
                <td>
                    <Trend
                        smooth
                        autoDraw
                        autoDrawDuration={2200}
                        autoDrawEasing="ease-out"
                        data={this.props.trend.data}
                        gradient={['#09fb7b', '#0dbd30']}
                        radius={17}
                        strokeWidth={2.8}
                        strokeLinecap={'round'}
                    />
                </td>
            </tr>
        )
    }
}

export default Topic;