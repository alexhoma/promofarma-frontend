import React from 'react';
import {Box, Column, Title} from "../Common/Html";
import {Line} from "react-chartjs-2";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    buildLabels() {
        let labels = [];
        this.props.searchResult.evolution_searched_word.data_chart.dates.forEach(
            (value) => labels.push(value)
        );

        return labels;
    }

    render() {
        if (this.props.fetching === true) {
            return (
                <Column>
                    <span className="spinner" />
                </Column>
            );
        }

        if (this.props.emptyResult === true) {
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
            searched_word_occurrences,
            evolution_searched_word
        } = this.props.searchResult;

        let chartData = {
            labels: this.buildLabels(),
            responsive: true,
            datasets: [{
                label: '',
                fill: false,
                borderColor: '#23d160',
                data: evolution_searched_word.data_chart.values
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
                            {searched_word_occurrences} occurrences
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