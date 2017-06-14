import React from 'react';
import MostSpokenTopicsList from "./MostSpokenTopicsList";
import LatestPost from "./LatestPost";
import MostRatedTopicsList from "./MostRatedTopicsList";

class InsightsPage extends React.Component {
    render() {
        return (
            <section className="InsightsPage">
                {/*Hero with input on it*/}
                <section className="hero is-success is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Promofarma Trends
                            </h1>
                        </div>
                    </div>
                </section>

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <MostSpokenTopicsList/>
                            </div>
                            <div className="column">
                                <MostRatedTopicsList/>
                            </div>
                            <div className="column">
                                <LatestPost/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default InsightsPage;