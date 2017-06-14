import React from 'react';
import Input from "./Input";
import Result from "./Result";

class SearchPage extends React.Component {
    constructor() {
        super();
        this.handleSearchResponse = this.handleSearchResponse.bind(this);
        this.state = {
            dataResponse: ''
        };
    }

    handleSearchResponse(response) {
        console.log(response);
        this.setState({
            dataResponse: response
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
                                <Input onSearchAction={this.handleSearchResponse}/>
                            </h1>
                        </div>
                    </div>
                </section>

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <Result data={this.state.dataResponse} />
                    </div>
                </section>
            </section>
        );
    }
}

export default SearchPage;