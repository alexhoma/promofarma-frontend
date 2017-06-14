import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <section className="hero is-success is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            {this.props.title}
                        </h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;