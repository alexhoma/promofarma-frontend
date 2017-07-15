import React from 'react';

import Input from "./Input";
import Result from "./Result";
import {ColumnsSection, Hero} from "../Common/Html";

import { BASE_URL } from '../config';
import axios from 'axios';


class SearchPage extends React.Component {
    constructor() {
        super();
        this.fetchSearchRequest = this.fetchSearchRequest.bind(this);
        this.state = {
            isFetching: false,
            dataResponse: ''
        };
    }

    fetchSearchRequest(requestValue) {
        const self = this;
        const url = BASE_URL + '/searchInPosts';
        self.setState({
            isFetching: true
        });

        axios.get(url + '?searched_word=' + requestValue)
            .then(function(response) {
                self.setState({
                    dataResponse: response.data,
                    isFetching: false
                });
            }
        );
    }

    render() {
        return (
            <section className="SearchPage">
                <Hero>
                    <Input onSearchAction={this.fetchSearchRequest} />
                </Hero>

                <ColumnsSection>
                    <Result
                        searchResult={this.state.dataResponse}
                        fetching={this.state.isFetching}
                    />
                </ColumnsSection>
            </section>
        );
    }
}

export default SearchPage;