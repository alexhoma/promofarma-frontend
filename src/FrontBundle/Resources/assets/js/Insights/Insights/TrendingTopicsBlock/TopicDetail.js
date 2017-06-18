import React from 'react';
import ReactModal from 'react-modal';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import {Column, ColumnsSection, Hero} from "../../../Common/Html";
import {BASE_URL, modalCustomPageStyle} from '../../../config';

class TopicDetail extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.buildLabels = this.buildLabels.bind(this);
        this.state = {
            isFetching: true,
            dataResponse: {
                tag_name: '',
                data_chart: [],
                init_and_final_dates: {
                    initial: '',
                    final: ''
                }
            }
        };
    }

    fetchData() {
        const self = this;
        const url = BASE_URL + '/evolutionMostSpokenTopic';

        axios.get(url).then(function(response) {
            self.setState({
                dataResponse: response.data,
                isFetching: false
            });
        });
    }

    buildLabels() {
        let labels = [];
        this.state.dataResponse.data_chart.forEach(
            (value) => {
                labels.push('');
            }
        );

        return labels;
    }

    render() {
        let chartData = {
            labels: this.buildLabels(),
            responsive: true,
            datasets: [{
                label: '',
                fill: false,
                borderColor: '#23d160',
                data: this.state.dataResponse.data_chart
            }]
        };

        return (
            <ReactModal
                isOpen={this.props.modalState}
                contentLabel={this.state.name + ' modal'}
                style={modalCustomPageStyle}
                onAfterOpen={this.fetchData}
            >
                <Hero>
                    #{this.state.dataResponse.tag_name}
                    <a onClick={this.props.onCloseModal}
                       className="delete is-large"/>
                </Hero>
                {(this.state.isFetching)
                    ? (
                        <ColumnsSection>
                            <Column>
                                <span className="spinner"/>
                            </Column>
                        </ColumnsSection>
                    )
                    : (
                        <ColumnsSection>
                            <Column>
                                <Line
                                    height={100}
                                    width={300}
                                    data={chartData}
                                />
                            </Column>
                        </ColumnsSection>
                    )
                }
            </ReactModal>
        );
    }
}

export default TopicDetail;