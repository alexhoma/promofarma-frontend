import React from 'react';
import ReactModal from 'react-modal';
import {Column, ColumnsSection, Hero} from "../../../Common/Html";
import {Line} from 'react-chartjs-2';
import {modalCustomPageStyle} from '../../../config';

class TopicDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'cremaSolar',
            dates: {
                initial: '1497537585',
                final: '1497537585'
            },
            chart_data: [10, 30, 50, 60, 40]
        };
    }

    render() {
        let chartData = {
            labels: ['January','January','January','February', 'February'],
            responsive: true,
            datasets: [{
                label: '',
                fill: false,
                borderColor: '#23d160',
                data: this.state.chart_data
            }]
        };

        return (
            <ReactModal
                isOpen={this.props.modalState}
                contentLabel={this.state.name + ' modal'}
                style={modalCustomPageStyle}
            >
                <Hero>
                    #{this.state.name}
                    <a onClick={this.props.onCloseModal}
                       className="delete is-large"/>
                </Hero>
                <ColumnsSection>
                    <Column>
                        <Line
                            height={100}
                            width={300}
                            data={chartData}
                        />
                    </Column>
                </ColumnsSection>
            </ReactModal>
        );
    }
}

export default TopicDetail;