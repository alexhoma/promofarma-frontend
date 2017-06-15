import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import Input from "./Input";
import Result from "./Result";

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
                <section className="hero is-success is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                <Input onSearchAction={this.fetchSearchRequest} />
                            </h1>
                        </div>
                    </div>
                </section>

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <Result
                            searchResult={this.state.dataResponse}
                            fetching={this.state.isFetching}
                        />
                    </div>
                </section>
            </section>
        );
    }
}

export default SearchPage;