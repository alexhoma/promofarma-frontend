import React from 'react';
import Trend from 'react-trend';
import ReactModal from 'react-modal';

class TopicDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'cremaSolar',
            dates: {
                initial: '1497537585',
                final: '1497537585'
            },
            chart_data: [10,30,50,60,80,40,30,50,30,60,30,60,30,20,60,30,60]
        };
    }

    render() {
        return (
            <ReactModal
                isOpen={this.props.modalState}
                contentLabel={this.state.name + ' modal'}
            >
                <strong>{this.state.name}</strong>
                <Trend
                    smooth
                    autoDraw
                    autoDrawDuration={2200}
                    autoDrawEasing="ease-out"
                    data={this.state.chart_data}
                    gradient={['#00d1b2']}
                    radius={17}
                    strokeWidth={2.8}
                    strokeLinecap={'round'}
                />
                <button onClick={this.props.onCloseModal}>
                    Close Modal
                </button>
            </ReactModal>
        );
    }
}

export default TopicDetail;