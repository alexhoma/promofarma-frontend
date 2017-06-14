import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    getRawMarkup() {
        return { __html: this.props.data }
    }

    render() {
        let responseBox = <div />;

        if (this.props.data !== '') {
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