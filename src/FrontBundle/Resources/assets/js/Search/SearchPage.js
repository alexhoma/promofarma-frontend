import React from 'react';

import Input from "./Input";
import Result from "./Result";
import {Hero} from "../Common/Html";

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

    fetchSearchRequest() {
        const self = this;
        const url = BASE_URL + '/search-data';
        self.setState({
            isFetching: true
        });

        axios.get(url).then(function(response) {
            self.setState({
                dataResponse: response.data,
                isFetching: false
            });
        });
    }

    render() {
        return (
            <section className="SearchPage">
                {/*Hero with input on it*/}
                <Hero>
                    <Input onSearchAction={this.fetchSearchRequest} />
                </Hero>

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <Result
                                searchResult={this.state.dataResponse}
                                fetching={this.state.isFetching}
                            />
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default SearchPage;