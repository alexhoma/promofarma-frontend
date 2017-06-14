import React from 'react';
import Hero from '../Common';
import Input from "./Input";
import Result from "./Result";

class SearchPage extends React.Component {
    render() {
        return (
            <section className="SearchPage">
                {/*Hero with input on it*/}
                <Hero title={
                    <Input />
                } />

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <Result />
                    </div>
                </section>
            </section>
        );
    }
}

export default SearchPage;