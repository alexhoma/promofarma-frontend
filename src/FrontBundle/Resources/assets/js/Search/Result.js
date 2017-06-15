import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    getRawMarkup() {
        return { __html: this.props.searchResult.msg }
    }

    render() {
        let responseBox = <div/>;

        if (this.props.fetching === true) {
            responseBox = (
                <div className="columns">
                    <div className="column">
                        <span className="spinner" />
                    </div>
                </div>
            );
        }

        if (this.props.searchResult !== '') {
            responseBox = (
                <div className="box">
                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p><strong>Result box</strong></p>
                                <p dangerouslySetInnerHTML={this.getRawMarkup()} />
                            </div>
                        </div>
                    </article>
                </div>
            );
        }

        return responseBox;
    }
}

export default Result;