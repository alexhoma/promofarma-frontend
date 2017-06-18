import React from 'react';
import {Box, Column, Title} from "../Common/Html";
import {Line} from "react-chartjs-2";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.fetching === true) {
            return (
                <Column>
                    <span className="spinner" />
                </Column>
            );
        }

        if (this.props.searchResult === '') {
            return (
                <Column>
                    <Box>
                        <p>No results</p>
                    </Box>
                </Column>
            )
        }

        const {
            searched_word,
            number_searched_word,
            evolution_searched_word
        } = this.props.searchResult;

        let chartData = {
            labels: ['January','January','January','February', 'February'],
            responsive: true,
            datasets: [{
                label: '',
                fill: false,
                borderColor: '#23d160',
                data: evolution_searched_word.data_chart
            }]
        };

        return (
            <Column>
                <Box>
                    <Title
                        heading={'h3'}
                        className="is-marginless"
                    >
                        #{searched_word}
                        <span className="tag is-info is-small is-pulled-right">
                            Searched times {number_searched_word}
                        </span>
                    </Title>

                    <Line
                        height={75}
                        data={chartData} />
                </Box>
            </Column>
        );
    }
}

export default Result;