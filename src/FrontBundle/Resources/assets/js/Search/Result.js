import React from 'react';
import {Box, Column} from "../Common/Html";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    getRawMarkup() {
        return { __html: this.props.searchResult.msg }
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

        return (
            <Column>
                <Box>
                    <p><strong>Result box</strong></p>
                    <p dangerouslySetInnerHTML={this.getRawMarkup()} />
                </Box>
            </Column>
        );
    }
}

export default Result;