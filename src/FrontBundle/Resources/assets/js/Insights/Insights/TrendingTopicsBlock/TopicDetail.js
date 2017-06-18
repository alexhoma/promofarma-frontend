import React from 'react';
import Trend from 'react-trend';
import ReactModal from 'react-modal';
import {Hero} from "../../../Common/Html";

const modalCustomStyle = {
    overlay : {
        position        : 'absolute',
        backgroundColor : 'rgba(32, 32, 32, 0.75)'
    },
    content : {
        top                     : '0',
        border                  : '0',
        background              : '#fff',
        overflow                : 'auto',
        WebkitOverflowScrolling : 'touch',
        borderRadius            : '0',
        padding                 : '52px 0 0 0',
        height                  : '100%'
    }
};

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
                style={modalCustomStyle}
            >
                <Hero>
                    #{this.state.name}
                    <a onClick={this.props.onCloseModal}
                       className="delete is-large" />
                </Hero>

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
            </ReactModal>
        );
    }
}

export default TopicDetail;