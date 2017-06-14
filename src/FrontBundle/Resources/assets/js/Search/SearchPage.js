import React from 'react';
import Input from "./Input";
import Result from "./Result";

class SearchPage extends React.Component {
    constructor() {
        super();
        this.handleSearchResponse = this.handleSearchResponse.bind(this);
        this.state = {
            dataResponse: []
        };
    }

    handleSearchResponse(response) {
        console.log(response);
        this.setState({
            dataResponse: response
        });
    }

    getRawMarkup() {
        return { __html: this.state.dataResponse }
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
                        <Result />
                    </div>
                </section>

                <div dangerouslySetInnerHTML={this.getRawMarkup()}/>
            </section>
        );
    }
}

export default SearchPage;